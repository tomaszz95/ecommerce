const express = require('express')
const router = express.Router()

const {
	getFilteredProducts,
	getSingleProduct,
	createProduct,
	getHomepageProducts,
} = require('../controllers/productController')

const queryProductsValidator = require('../middleware/queryProductsValidator')

router.get('/homepage', getHomepageProducts)

router.get('/', queryProductsValidator, getFilteredProducts)

// router.post('/', createProduct)

router.get('/:uniqueId', getSingleProduct)

module.exports = router
