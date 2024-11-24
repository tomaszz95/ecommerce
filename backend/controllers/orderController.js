const Order = require('../models/Order')
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')
const checkPermissions = require('../utils/checkPermissions')
const validateDeliveryDetails = require('../utils/validateDeliveryDetails')

const getSingleOrder = async (req, res) => {
	const { id: orderId } = req.params

	const order = await Order.findOne({ _id: orderId })

	if (!order) {
		throw new CustomError.NotFoundError('No order found')
	}

	checkPermissions(req.user, order.user)

	res.status(StatusCodes.OK).json({ order })
}

const getCurrentUserOrders = async (req, res) => {
	const orders = await Order.find({ user: req.user.userId })

	res.status(StatusCodes.OK).json({ orders })
}

const createOrder = async (req, res) => {
	const { items: cartItems, discount } = req.body

	if (!cartItems || cartItems.length < 1) {
		throw new CustomError.BadRequestError('No cart items provided')
	}

	let orderItems = []
	let subtotal = 0

	for (const item of cartItems) {
		const dbProduct = await Product.findOne({ _id: item.product })

		if (!dbProduct) {
			throw new CustomError.NotFoundError('Product not found')
		}

		const { name, price, images, _id, category, stock, promotion } = dbProduct

		let productPrice = price

		if (promotion.isPromotion) {
			const promotionValue = (price * promotion.promotionPercent) / 100
			productPrice = price - promotionValue
		}

		const productTotalPrice = item.amount * productPrice

		const singleOrderItem = {
			amount: item.amount,
			name,
			price,
			promotionPrice: productPrice,
			image: images[0],
			stock,
			promotion,
			category,
			product: _id,
			totalProductPrice: productTotalPrice,
		}

		subtotal += productTotalPrice

		orderItems = [...orderItems, singleOrderItem]
	}

	let discountValue = 0

	if (discount !== 0) {
		discountValue = ((subtotal * discount) / 100).toFixed(2)
	}

	const total = (subtotal - discountValue).toFixed(2)

	const totalOrders = await Order.countDocuments()

	const order = await Order.create({
		subtotal,
		total,
		discount,
		orderItems,
		paymentIntentId: totalOrders + 1,
		user: req.user.userId,
	})

	res.status(StatusCodes.CREATED).json({ order })
}

const updateOrderDelivery = async (req, res) => {
	const { id: orderId, method, methodWay, informations } = req.body

	const order = await Order.findOne({ _id: orderId })

	if (!order) {
		throw new CustomError.NotFoundError('No order found')
	}

	checkPermissions(req.user, order.user)

	validateDeliveryDetails(method, methodWay, informations)

	order.delivery = {
		method: method || order.delivery.method,
		methodWay: methodWay || order.delivery.methodWay,
		informations: {
			name: informations.name || order.delivery.informations.name,
			address: informations.address || order.delivery.informations.address,
			postalCode: informations.postalCode || order.delivery.informations.postalCode,
			city: informations.city || order.delivery.informations.city,
			phone: informations.phone || order.delivery.informations.phone,
			email: informations.email || order.delivery.informations.email,
		},
	}

	await order.save()

	res.status(StatusCodes.OK).json({ order })
}

module.exports = {
	getSingleOrder,
	getCurrentUserOrders,
	createOrder,
	updateOrderDelivery,
}
