const Order = require('../models/Order')

const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')

const checkPromoCode = require('../utils/checkPromoCode')

const updateOrdersAmount = async (req, res) => {
	const { orderId, productId, amountType } = req.body

	if (!orderId || !productId || !amountType) {
		throw new CustomError.BadRequestError('Order ID, Product ID, and amountType are required')
	}

	const order = await Order.findById(orderId)

	if (!order) {
		throw new CustomError.NotFoundError('Order not found')
	}

	if (order.status !== 'Pending') {
		throw new CustomError.BadRequestError('Cannot edit this order')
	}

	const productIndex = order.orderItems.findIndex(item => item.product.toString() === productId)

	if (productIndex === -1) {
		throw new CustomError.NotFoundError('Product not found in the order')
	}

	const productToUpdate = order.orderItems[productIndex]

	if (amountType === 'increase') {
		productToUpdate.amount += 1
		productToUpdate.totalProductPrice = (productToUpdate.amount * productToUpdate.promotionPrice).toFixed()
	} else if (amountType === 'decrease') {
		if (productToUpdate.amount === 1) {
			throw new CustomError.BadRequestError(
				'Cannot decrease quantity below 1. To remove the product, use the delete option.'
			)
		}
		productToUpdate.amount -= 1
		productToUpdate.totalProductPrice = (productToUpdate.amount * productToUpdate.promotionPrice).toFixed()
	} else {
		throw new CustomError.BadRequestError('Invalid type provided, must be either "increase" or "decrease"')
	}

	let subtotal = 0

	order.orderItems.forEach(item => {
		subtotal += parseFloat(item.totalProductPrice)
	})

	order.subtotal = subtotal.toFixed()

	if (order.discountValue !== 0) {
		const discount = Math.floor((order.subtotal * order.discountValue) / 100)
		order.discount = discount.toFixed()
		order.total = (order.subtotal - discount).toFixed()
	} else {
		order.discount = 0
		order.total = order.subtotal
	}
	await order.save()

	res.status(StatusCodes.OK).json({ msg: 'Product quantity updated successfully' })
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

const deleteWholeCart = async (req, res) => {
	const { orderId } = req.body

	if (!orderId) {
		throw new CustomError.BadRequestError('OrderId is required')
	}

	const result = await Order.updateOne(
		{ _id: orderId },
		{
			$set: {
				subtotal: 0,
				discount: 0,
				discountValue: 0,
				total: 0,
				status: 'Pending',
				comment: '',
				payment: 'Online payment',
				delivery: {
					informations: {
						name: '',
						address: '',
						postalCode: '',
						city: '',
						phone: '',
						email: '',
					},
					method: 'Courier',
					methodWay: 'FeedEx',
				},
				orderItems: [],
			},
		}
	)

	if (result.matchedCount === 0) {
		throw new CustomError.NotFoundError('Order not found')
	}

	return res.status(StatusCodes.OK).json({
		msg: 'Cart cleared',
	})
}

const deleteSingleProduct = async (req, res) => {
	const { orderId, productId } = req.body

	if (!orderId || !productId) {
		throw new CustomError.BadRequestError('Order ID and Product ID are required')
	}

	const order = await Order.findById(orderId)

	if (!order) {
		throw new CustomError.NotFoundError('Order not found')
	}

	if (order.status !== 'Pending') {
		throw new CustomError.BadRequestError('Cannot edit this order')
	}

	const productIndex = order.orderItems.findIndex(item => item.product.toString() === productId)

	if (productIndex === -1) {
		throw new CustomError.NotFoundError('Product not found in the order')
	}

	const productToRemove = order.orderItems[productIndex]

	const { totalProductPrice } = productToRemove

	order.subtotal = (order.subtotal - totalProductPrice).toFixed()

	if (order.discountValue !== 0) {
		const discount = Math.floor((order.subtotal * order.discountValue) / 100)
		order.discount = discount.toFixed()
		order.total = (order.subtotal - discount).toFixed()
	} else {
		order.discount = 0
		order.total = order.subtotal
	}

	order.orderItems.splice(productIndex, 1)

	await order.save()

	res.status(StatusCodes.OK).json({ msg: 'Product removed successfully' })
}

module.exports = {
	updateOrdersAmount,
	checkPromotionCode,
	deleteWholeCart,
	deleteSingleProduct,
}
