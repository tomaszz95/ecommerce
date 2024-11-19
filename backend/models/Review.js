const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
	{
		author: {
			type: String,
			required: [true, 'Please provide author name'],
			maxlength: [50, 'Title can not be longer than 50 characters'],
		},
		message: {
			type: String,
			required: [true, 'Please provide text review'],
		},
		rating: {
			type: Number,
			required: [true, 'Please provide rating'],
			min: 1,
			max: 5,
		},
		likes: {
			type: Number,
			required: true,
			default: 0,
		},
		dislikes: {
			type: Number,
			required: true,
			default: 0,
		},
		product: {
			type: mongoose.Schema.ObjectId,
			ref: 'Product',
			required: true,
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{ timestamps: true }
)

ReviewSchema.index({ product: 1, user: 1 }, { unique: true })

ReviewSchema.statics.calculateAverageRating = async function (productId) {
	const result = await this.aggregate([
		{
			$match: { product: productId },
		},
		{
			$group: {
				_id: null,
				averageRating: { $avg: '$rating' },
				numOfReviews: { $sum: 1 },
			},
		},
	])

	try {
		await this.model('Product').findOneAndUpdate(
			{ _id: productId },
			{
				averageRating: Math.ceil(result[0]?.averageRating || 0),
				numOfReviews: result[0]?.numOfReviews || 0,
			}
		)
	} catch (err) {
		console.log(err)
	}
}

ReviewSchema.post('save', async function () {
	await this.constructor.calculateAverageRating(this.product)
})

ReviewSchema.post('deleteOne', { document: true, query: false }, async function () {
	await this.constructor.calculateAverageRating(this.product)
})

module.exports = mongoose.model('Review', ReviewSchema)
