const express = require('express')
const router = express.Router()

const { getFilteredProducts, getSingleProduct, createProduct } = require('../controllers/productController')

const { getSingleProductReviews } = require('../controllers/reviewController')

const queryProductsValidator = require('../middleware/queryProductsValidator')

router.get('/', queryProductsValidator, getFilteredProducts)

router.post('/', createProduct)

router.get('/:id', getSingleProduct)

router.get('/:id/reviews', getSingleProductReviews)

module.exports = router
