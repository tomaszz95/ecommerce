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
	uniqueId: {
		type: String,
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
		discountValue: {
			type: Number,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ['Pending', 'Confirmed', 'Paid'],
			default: 'Pending',
		},
		comment: {
			type: String,
			default: '',
		},
		payment: {
			type: String,
			default: 'Not selected yet',
		},
		delivery: {
			method: { type: String, default: 'Not selected yet' },
			methodWay: { type: String, default: 'Not selected yet' },
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
			immutable: true,
		},
		orderItems: [SingleOrderItemSchema],
		user: {
			type: mongoose.Schema.Types.Mixed,
			refPath: 'userType',
			required: true,
		},
		userType: {
			type: String,
			enum: ['User', 'Guest'],
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
