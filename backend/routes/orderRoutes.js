const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const { attachOrderToRequest } = require('../middleware/attachOrder')

const { getOrder, addToCart, getSingleOrder, getUserOrderList } = require('../controllers/orderController')
const {
	updateOrderDelivery,
	updateOrderPayment,
	updateOrderComment,
	updateOrderPaid,
} = require('../controllers/orderDeliveryController')

const {
	updateOrdersAmount,
	checkPromotionCode,
	deleteWholeCart,
	deleteSingleProduct,
} = require('../controllers/orderCartController')

router.post('/getOrder', getOrder)

router.post('/addToCart', addToCart)

router.patch('/updateAmount', updateOrdersAmount)

router.patch('/checkPromoCode', checkPromotionCode)

router.patch('/deleteCart', deleteWholeCart)

router.patch('/deleteSingleProduct', deleteSingleProduct)

router.get('/user/orderList', authenticateUser, getUserOrderList)

router.get('/user/orderList/:orderId', authenticateUser, getSingleOrder)

router.patch('/delivery/:id', attachOrderToRequest, updateOrderDelivery)

router.get('/payment/id', attachOrderToRequest, updateOrderPayment)

router.get('/summary/id', attachOrderToRequest, updateOrderComment)

router.get('/paid/:id', attachOrderToRequest, updateOrderPaid)

module.exports = router
