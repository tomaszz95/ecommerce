const express = require('express')
const router = express.Router()

const { attachOrderToRequest } = require('../middleware/attachOrder')
const { authenticateUser } = require('../middleware/authentication')

const { getSingleUserOrder, getCurrentUserOrders } = require('../controllers/ordersUserController')

router.get('/orderList', authenticateUser, getCurrentUserOrders)

router.get('/:id', attachOrderToRequest, authenticateUser, getSingleUserOrder)

module.exports = router
