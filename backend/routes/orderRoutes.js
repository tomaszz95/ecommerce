const express = require('express')
const router = express.Router()

const { attachOrderToRequest } = require('../middleware/attachOrder')
const { authenticateUser } = require('../middleware/authentication')

const {
	getSingleOrder,
	getCurrentUserOrders,
	addToCart,
	updateOrderDelivery,
	updateOrderPayment,
	updateOrderComment,
	updatePaid,
	updateCart,
} = require('../controllers/orderController')

router.post('/addToCart', addToCart)

router.get('/orderList', authenticateUser, getCurrentUserOrders)

router.patch('/updateCart', updateCart)

router.patch('/:id/delivery', attachOrderToRequest, updateOrderDelivery)

router.patch('/:id/payment', attachOrderToRequest, updateOrderPayment)

router.patch('/:id/summary', attachOrderToRequest, updateOrderComment)

router.patch('/:id/paid', attachOrderToRequest, updatePaid)

router.get('/:id', attachOrderToRequest, getSingleOrder)

module.exports = router
