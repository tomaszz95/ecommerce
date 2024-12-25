const Order = require('../models/Order')

const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')

const getUserOrderList = async (req, res) => {
	const orders = await Order.find({ user: req.user.userId }).select('delivery total payment paymentIntentId status _id')

	res.status(StatusCodes.OK).json({ orders })
}

const getSingleOrder = async (req, res) => {
	const { orderId } = req.params

	if (!orderId) {
		throw new CustomError.BadRequestError('Please provide a valid order id')
	}

	const order = await Order.findOne({ _id: orderId, user: req.user.userId }).select('-createdAt -user -userType -updatedAt')

	if (!order) {
		throw new CustomError.NotFoundError(`Please provide a valid id`)
	}

	res.status(StatusCodes.OK).json({ order })
}

module.exports = {
	getUserOrderList,
	getSingleOrder,
}
