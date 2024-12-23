const Order = require('../models/Order')
const Product = require('../models/Product')

const { StatusCodes } = require('http-status-codes')
const { isTokenValid } = require('../utils/jwt')
const CustomError = require('../errors/index')

const validateDeliveryDetails = require('../utils/validateDeliveryDetails')
const checkPromoCode = require('../utils/checkPromoCode')

const getOrder = async (req, res) => {
	const { orderId } = req.body

	const order = await Order.findOne({ _id: orderId }).select(
		'discount discountValue orderItems subtotal total user _id'
	)

	if (!order) {
		throw new CustomError.NotFoundError('Order not found')
	}

	const similarProducts = await Product.find({
		category: order.orderItems[0].category,
	})
		.select('_id name price category promotion uniqueId images')
		.limit(10)
		.lean()
	similarProducts.forEach(item => {
		item.image = item.images?.[0] || null
		item.promotion.promotionPrice = item.promotion.isPromotion
			? Math.round(item.price * (1 - item.promotion.promotionPercent / 100))
			: item.price.toFixed()
		delete item.images
	})

	res.status(StatusCodes.OK).json({ order, similarProducts })
}

const addToCart = async (req, res) => {
	const { productId, orderId } = req.body

	if (!productId) {
		throw new CustomError.BadRequestError('Product ID is required')
	}

	let order, user, userType

	if (orderId) {
		order = await Order.findById(orderId)

		if (order && order.status !== 'Pending') {
			throw new CustomError.BadRequestError('Cannot add more products to this order')
		}
	}

	if (!order) {
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
			status: 'Pending',
			subtotal: 0,
			discount: 0,
			discountValue: 0,
			total: 0,
			paymentIntentId: (await Order.countDocuments()) + 1,
		})
	}

	const existingProductIndex = order.orderItems.findIndex(item => item.product.toString() === productId)

	if (existingProductIndex !== -1) {
		const existingProduct = order.orderItems[existingProductIndex]

		existingProduct.amount += 1
		existingProduct.totalProductPrice = (existingProduct.amount * existingProduct.promotionPrice).toFixed()
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
			productPrice = (price - promotionValue).toFixed()
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

	order.subtotal = subtotal.toFixed()

	if (order.discountValue !== 0) {
		const discount = (subtotal * order.discountValue) / 100

		order.discount = discount.toFixed()
		order.total = (subtotal - discount).toFixed()
	} else {
		order.total = subtotal.toFixed()
	}

	await order.save()

	res.status(StatusCodes.OK).json({ orderId: order._id })
}

const updateOrdersAmount = async (req, res) => {
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

	if (order.status !== 'Pending') {
		throw new CustomError.BadRequestError('Cannot edit this order')
	}

	const existingProductIndex = order.orderItems.findIndex(item => item.product.toString() === productId)

	if (existingProductIndex === -1) {
		throw new CustomError.NotFoundError('Product not found in the order')
	}

	const existingProduct = order.orderItems[existingProductIndex]

	if (amountType === 'increase') {
		existingProduct.amount += 1
		existingProduct.totalProductPrice = (existingProduct.amount * existingProduct.promotionPrice).toFixed()
	} else if (amountType === 'decrease') {
		existingProduct.amount -= 1
		if (existingProduct.amount === 0) {
			order.orderItems.splice(existingProductIndex, 1)
		} else {
			existingProduct.totalProductPrice = (existingProduct.amount * existingProduct.promotionPrice).toFixed()
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

	order.subtotal = subtotal.toFixed()

	if (order.discountValue !== 0) {
		const discount = (subtotal * order.discountValue) / 100

		order.discount = discount.toFixed()
		order.total = (subtotal - discount).toFixed()
	} else {
		order.total = subtotal.toFixed()
	}

	await order.save()

	res.status(StatusCodes.OK).json({ order: order })
}

const checkPromotionCode = async (req, res) => {
	const { orderId, promoCode } = req.body

	if (!promoCode || !orderId) {
		throw new CustomError.BadRequestError('Order ID, and promo code are required')
	}

	const order = await Order.findById(orderId)

	if (!order) {
		throw new CustomError.NotFoundError('Order not found')
	}

	if (order.status !== 'Pending') {
		throw new CustomError.BadRequestError('Cannot edit this order')
	}

	const promoValue = checkPromoCode(promoCode)

	if (!promoValue) {
		return res.status(StatusCodes.OK).json({ msg: 'Promo code is invalid' })
	}

	const discount = (order.subtotal * promoValue) / 100

	order.discount = discount.toFixed()
	order.discountValue = promoValue.toFixed()
	order.total = (order.subtotal - discount).toFixed()

	await order.save()

	return res.status(StatusCodes.OK).json({
		msg: 'Promo code is valid',
	})
}

const updateOrderDelivery = async (req, res) => {
	const order = req.order

	if (order.status !== 'Pending') {
		throw new CustomError.BadRequestError('Cannot edit this order')
	}

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

	if (order.status !== 'Pending') {
		throw new CustomError.BadRequestError('Cannot edit this order')
	}

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

	if (order.status !== 'Pending') {
		throw new CustomError.BadRequestError('Cannot edit this order')
	}

	const { comment } = req.body

	if (!comment) {
		throw new CustomError.BadRequestError('Please provide a comment')
	}

	order.comment = comment
	order.status = 'Confirmed'

	await order.save()

	res.status(StatusCodes.OK).json({ msg: 'Order updated successfully' })
}

const updateOrderPaid = async (req, res) => {
	const order = req.order

	if (order.status !== 'Confirmed') {
		throw new CustomError.BadRequestError('You must confirm your order, then pay for it')
	}

	order.status = 'Paid'

	await order.save()

	res.status(StatusCodes.OK).json({ msg: 'Order updated successfully' })
}

module.exports = {
	getOrder,
	addToCart,
	updateOrdersAmount,
	updateOrderDelivery,
	updateOrderPayment,
	updateOrderComment,
	updateOrderPaid,
	checkPromotionCode,
}
