const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide product name'],
			trim: true,
			maxlength: [100, 'Name can not be more than 100 characters'],
		},
		price: {
			type: Number,
			required: [true, 'Please provide product price'],
			default: 0,
		},
		description: {
			type: String,
			required: [true, 'Please provide product description'],
			maxlength: [1000, 'Description can not be more than 1000 characters'],
		},
		images: { type: [{ type: String }], default: [] },
		category: {
			type: String,
			required: [true, 'Please provide product category'],
		},
		company: {
			type: String,
			required: [true, 'Please provide company name'],
		},
		stock: {
			type: Number,
			required: [true, 'Some inventory products'],
			default: 15,
		},
		recommended: {
			type: Boolean,
			default: false,
		},
		promotion: {
			isPromotion: {
				type: Boolean,
				default: false,
			},
			promotionPercent: {
				type: Number,
				default: 0,
			},
		},
		specification: {
			type: Map,
			of: String,
			default: {},
		},
		presentation: {
			type: [
				{
					title: {
						type: String,
					},
					text: {
						type: String,
					},
					img: {
						type: String,
					},
				},
			],
			default: [],
			_id: false,
		},
	},
	{ timestamps: true }
)

ProductSchema.virtual('reviews', {
	ref: 'Review',
	localField: '_id',
	foreignField: 'product',
	justOne: false,
})

module.exports = mongoose.model('Product', ProductSchema)