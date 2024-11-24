const mongoose = require('mongoose')

const SingleOrderItemSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	promotionPrice: { type: Number, required: true },
	image: { type: String, required: true },
	amount: { type: Number, required: true },
	stock: { type: Number, required: true },
	totalProductPrice: { type: Number, required: true },
	category: {
		type: String,
		required: true,
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
	product: {
		type: mongoose.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
	_id: false,
})

const OrderSchema = new mongoose.Schema(
	{
		subtotal: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ['pending', 'failed', 'paid', 'canceled', 'in delivery', 'delivered'],
			default: 'pending',
		},
		comment: {
			type: String,
			default: '',
		},
		payment: {
			type: String,
			default: '',
		},
		delivery: {
			method: { type: String, enum: ['Store', 'Courier'], default: 'Courier' },
			methodWay: { type: String, enum: ['FeedEx', 'Inpost', 'UPS', 'Warsaw', 'Cracow', 'Katowice'], default: 'FeedEx' },
			informations: {
				name: { type: String, default: '' },
				address: { type: String, default: '' },
				postalCode: { type: String, default: '' },
				city: { type: String, default: '' },
				phone: { type: String, default: '' },
				email: { type: String, default: '' },
			},
		},
		paymentIntentId: {
			type: Number,
		},
		orderItems: [SingleOrderItemSchema],
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
