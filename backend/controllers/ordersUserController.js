const Order = require('../models/Order')

const { StatusCodes } = require('http-status-codes')
const checkPermissions = require('../utils/checkPermissions')

const getSingleUserOrder = async (req, res) => {
	const order = req.order

	checkPermissions(req.user, order.user)

	res.status(StatusCodes.OK).json({ order })
}

const getCurrentUserOrders = async (req, res) => {
	const orders = await Order.find({ user: req.user.userId })

	res.status(StatusCodes.OK).json({ orders })
}

module.exports = {
	getSingleUserOrder,
	getCurrentUserOrders,
}
