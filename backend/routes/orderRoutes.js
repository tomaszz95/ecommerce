const express = require('express')
const router = express.Router()

const { attachOrderToRequest } = require('../middleware/attachOrder')

const {
	addToCart,
	updateOrderDelivery,
	updateOrderPayment,
	updateOrderComment,
	updateOrderPaid,
	updateOrdersAmount,
	checkPromotionCode,
	getOrder,
} = require('../controllers/orderController')

router.post('/getOrder', getOrder)

router.post('/addToCart', addToCart)

router.patch('/updateAmount', updateOrdersAmount)

router.patch('/checkPromoCode', checkPromotionCode)

router.patch('/:id/delivery', attachOrderToRequest, updateOrderDelivery)

router.patch('/:id/payment', attachOrderToRequest, updateOrderPayment)

router.patch('/:id/summary', attachOrderToRequest, updateOrderComment)

router.patch('/:id/paid', attachOrderToRequest, updateOrderPaid)

module.exports = router
