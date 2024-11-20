const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const { getSingleReview, createReview, updateReview, deleteReview } = require('../controllers/reviewController')

router.post('/', authenticateUser, createReview)

router.get('/:id', authenticateUser, getSingleReview)

router.patch('/:id', authenticateUser, updateReview)

router.delete('/:id', authenticateUser, deleteReview)

module.exports = router
