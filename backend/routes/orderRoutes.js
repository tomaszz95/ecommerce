const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

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
	getSingleOrder,
	getUserOrderList,
	deleteWholeCart,
	deleteSingleProduct,
} = require('../controllers/orderController')

router.post('/getOrder', getOrder)

router.post('/addToCart', addToCart)

router.patch('/updateAmount', updateOrdersAmount)

router.patch('/checkPromoCode', checkPromotionCode)

router.patch('/deleteCart', deleteWholeCart)

router.patch('/deleteSingleProduct', deleteSingleProduct)

router.get('/user/orderList', authenticateUser, getUserOrderList)

router.get('/user/orderList/:orderId', authenticateUser, getSingleOrder)

router.patch('/:id/delivery', attachOrderToRequest, updateOrderDelivery)

router.patch('/:id/payment', attachOrderToRequest, updateOrderPayment)

router.patch('/:id/summary', attachOrderToRequest, updateOrderComment)

router.patch('/:id/paid', attachOrderToRequest, updateOrderPaid)

module.exports = router
