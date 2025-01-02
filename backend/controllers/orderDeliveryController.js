const User = require('../models/User')
const Order = require('../models/Order')

const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')

const validateDeliveryDetails = require('../utils/validateDeliveryDetails')

const getOrderDeliveryData = async (req, res) => {
	const { id: orderId } = req.params
	if (!orderId) {
		throw new CustomError.BadRequestError('Please provide a valid order id')
	}
	
	const order = await Order.findOne({ _id: orderId }).select('-createdAt -user -userType -updatedAt')
	
	console.log(order)
	if (!order) {
		throw new CustomError.NotFoundError(`Please provide a valid id`)
	}

	res.status(StatusCodes.OK).json({ order })
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

	if (!order.user.includes('guest')) {
		await User.findOneAndUpdate(
			{ _id: order.user },
			{
				informations: {
					address: informations.address || order.delivery.informations.name,
					postalCode: informations.postalCode || order.delivery.informations.postalCode,
					city: informations.city || order.delivery.informations.city,
					phone: informations.phone || order.delivery.informations.phone,
				},
			},
			{ new: true, runValidators: true }
		)
	}

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
	getOrderDeliveryData,
}
