const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const { createReview, updateReview, deleteReview } = require('../controllers/reviewController')

router.post('/', authenticateUser, createReview)

router.patch('/', authenticateUser, updateReview)

router.delete('/', authenticateUser, deleteReview)

module.exports = router
