const Order = require('../models/Order')
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const { isTokenValid } = require('../utils/jwt')
const CustomError = require('../errors/index')
const checkPermissions = require('../utils/checkPermissions')
const validateDeliveryDetails = require('../utils/validateDeliveryDetails')

const getSingleOrder = async (req, res) => {
	const order = req.order

	res.status(StatusCodes.OK).json({ order })
}

const getCurrentUserOrders = async (req, res) => {
	const orders = await Order.find({ user: req.user.userId })

	res.status(StatusCodes.OK).json({ orders })
}

const addToCart = async (req, res) => {
	const { productId, orderId } = req.body

	if (!productId) {
		throw new CustomError.BadRequestError('Product ID is required')
	}

	let order, user, userType

	if (orderId) {
		order = await Order.findById(orderId)

		if (!order) {
			throw new CustomError.NotFoundError('Order not found')
		}

		user = order.user
		userType = order.userType
	} else {
		const token = req.signedCookies.token

		if (token) {
			try {
				const { userId } = isTokenValid({ token })
				user = userId
				userType = 'User'
			} catch (err) {
				throw new CustomError.UnauthenticatedError('Invalid token')
			}
		} else {
			user = `guest#${(await Order.countDocuments()) + 1}`
			userType = 'Guest'
		}

		order = await Order.create({
			user: user,
			userType: userType,
			orderItems: [],
			status: 'In-progress',
			subtotal: 0,
			discount: 0,
			total: 0,
			paymentIntentId: (await Order.countDocuments()) + 1,
		})
	}

	const existingProductIndex = order.orderItems.findIndex(item => item.product.toString() === productId)

	if (existingProductIndex !== -1) {
		const existingProduct = order.orderItems[existingProductIndex]

		existingProduct.amount += 1
		existingProduct.totalProductPrice = existingProduct.amount * existingProduct.promotionPrice
		order.orderItems[existingProductIndex] = existingProduct
	} else {
		const dbProduct = await Product.findOne({ _id: productId })

		if (!dbProduct) {
			throw new CustomError.NotFoundError('Product not found')
		}

		const { name, price, images, category, stock, promotion } = dbProduct
		let productPrice = price

		if (promotion.isPromotion) {
			const promotionValue = (price * promotion.promotionPercent) / 100
			productPrice = price - promotionValue
		}

		const totalProductPrice = productPrice

		const newOrderItem = {
			amount: 1,
			name,
			price,
			promotionPrice: productPrice,
			image: images[0],
			stock,
			promotion,
			category,
			product: productId,
			totalProductPrice: totalProductPrice,
		}

		order.orderItems.push(newOrderItem)
	}

	let subtotal = 0

	order.orderItems.forEach(item => {
		subtotal += item.totalProductPrice
	})

	order.subtotal = subtotal
	order.total = subtotal

	await order.save()

	res.status(StatusCodes.OK).json({ orderId: order._id, userId: user, userType: userType })
}

const updateCart = async (req, res) => {
	const { orderId, productId, amountType } = req.body

	if (!productId || !amountType) {
		throw new CustomError.BadRequestError('Product ID and amountType are required')
	}

	if (!orderId) {
		throw new CustomError.NotFoundError('No orders yet')
	}

	const order = await Order.findById(orderId)

	if (!order) {
		throw new CustomError.NotFoundError('Order not found')
	}

	const existingProductIndex = order.orderItems.findIndex(item => item.product.toString() === productId)

	if (existingProductIndex === -1) {
		throw new CustomError.NotFoundError('Product not found in the order')
	}

	const existingProduct = order.orderItems[existingProductIndex]

	if (amountType === 'increase') {
		existingProduct.amount += 1
		existingProduct.totalProductPrice = existingProduct.amount * existingProduct.promotionPrice
	} else if (amountType === 'decrease') {
		existingProduct.amount -= 1
		if (existingProduct.amount === 0) {
			order.orderItems.splice(existingProductIndex, 1)
		} else {
			existingProduct.totalProductPrice = existingProduct.amount * existingProduct.promotionPrice
			order.orderItems[existingProductIndex] = existingProduct
		}
	} else {
		throw new CustomError.BadRequestError('Bad operation')
	}

	if (order.orderItems.length === 0) {
		await Order.deleteOne({ _id: orderId })
		return res.status(StatusCodes.OK).json({ message: 'Order removed, no items left in cart' })
	}

	let subtotal = 0

	order.orderItems.forEach(item => {
		subtotal += item.totalProductPrice
	})

	order.subtotal = subtotal
	order.total = subtotal

	await order.save()

	res.status(StatusCodes.OK).json({ order: order })
}

const updateOrderDelivery = async (req, res) => {
	const order = req.order

	const { method, methodWay, informations } = req.body

	if (!method || !methodWay || !informations) {
		throw new CustomError.BadRequestError('No informations provided')
	}

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

	res.status(StatusCodes.OK).json({ msg: 'Order updated successfully' })
}

const updateOrderPayment = async (req, res) => {
	const order = req.order

	const { payment } = req.body

	if (!payment) {
		throw new CustomError.BadRequestError('Please provide a payment method')
	}

	order.payment = payment

	await order.save()

	res.status(StatusCodes.OK).json({ msg: 'Order updated successfully' })
}

const updateOrderComment = async (req, res) => {
	const order = req.order

	const { comment } = req.body

	if (!comment) {
		throw new CustomError.BadRequestError('Please provide a comment')
	}

	order.comment = comment
	order.status = 'Confirmed'

	await order.save()

	res.status(StatusCodes.OK).json({ msg: 'Order updated successfully' })
}

const updatePaid = async (req, res) => {
	const order = req.order

	order.status = 'Paid'

	await order.save()

	res.status(StatusCodes.OK).json({ msg: 'Order updated successfully' })
}

module.exports = {
	getSingleOrder,
	getCurrentUserOrders,
	addToCart,
	updateCart,
	updateOrderDelivery,
	updateOrderPayment,
	updateOrderComment,
	updatePaid,
}
