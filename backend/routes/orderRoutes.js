const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const {
	getSingleOrder,
	getCurrentUserOrders,
	createOrder,
	updateOrderDelivery,
} = require('../controllers/orderController')

router.post('/createOrder', authenticateUser, createOrder)

router.get('/orderList', authenticateUser, getCurrentUserOrders)

router.patch('/deliveryUpdate', authenticateUser, updateOrderDelivery)

router.get('/:id', authenticateUser, getSingleOrder)

module.exports = router
