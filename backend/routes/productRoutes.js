const express = require('express')
const router = express.Router()

const { getFilteredProducts, getSingleProduct, createProduct } = require('../controllers/productController')
const queryProductsValidator = require('../middleware/queryProductsValidator')

router.get('/', queryProductsValidator, getFilteredProducts)

router.post('/', createProduct)

router.get('/:id', getSingleProduct)

module.exports = router
