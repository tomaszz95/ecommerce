const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const {
	createProduct,
	getAllProducts,
	getSingleProduct,
	updateProduct,
	deleteProduct,
	uploadImage,
} = require('../controllers/productController')

const { getSingleProductReviews } = require('../controllers/reviewController')

router.get('/', getAllProducts)

router.post('/', authenticateUser, createProduct)

router.post('/uploadImage', authenticateUser, uploadImage)

router.get('/:id', getSingleProduct)

router.patch('/:id', authenticateUser, updateProduct)

router.delete('/:id', authenticateUser, deleteProduct)

router.get('/:id/reviews', getSingleProductReviews)

module.exports = router
