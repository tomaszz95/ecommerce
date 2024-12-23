const express = require('express')
const router = express.Router()

const { attachOrderToRequest } = require('../middleware/attachOrder')
const { authenticateUser } = require('../middleware/authentication')

const { getSingleUserOrder, getCurrentUserOrders } = require('../controllers/ordersUserController')

router.post('/getUser', attachOrderToRequest, authenticateUser, getSingleUserOrder)

router.post('/orderList', authenticateUser, getCurrentUserOrders)

module.exports = router
