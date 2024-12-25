const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const { getSingleOrder, getUserOrderList } = require('../controllers/ordersUserController')

router.get('/orderList', authenticateUser, getUserOrderList)

router.get('/:orderId', authenticateUser, getSingleOrder)

module.exports = router
