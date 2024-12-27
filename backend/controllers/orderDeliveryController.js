const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')

const validateDeliveryDetails = require('../utils/validateDeliveryDetails')

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
	updateOrderDelivery,
	updateOrderPayment,
	updateOrderComment,
	updateOrderPaid,
}
