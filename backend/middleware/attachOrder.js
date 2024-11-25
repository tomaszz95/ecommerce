const Order = require('../models/Order')

const attachOrderToRequest = async (req, res, next) => {
	const { id: orderId } = req.params

	const order = await Order.findOne({ _id: orderId })

	if (!order) {
		throw new CustomError.NotFoundError('Order not found')
	}

	req.order = order

	next()
}

module.exports = {
	attachOrderToRequest,
}
