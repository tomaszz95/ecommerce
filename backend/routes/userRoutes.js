const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const {
	getSingleUser,
	updateUser,
	updateUserPassword,
	updateUserFavorites,
	getUserFavorites,
} = require('../controllers/userController')

router.get('/', authenticateUser, getSingleUser)

router.patch('/updateUser', authenticateUser, updateUser)

router.patch('/updateUserPassword', authenticateUser, updateUserPassword)

router.get('/getUserFavorites', authenticateUser, getUserFavorites)

router.patch('/updateUserFavorites', authenticateUser, updateUserFavorites)

module.exports = router
