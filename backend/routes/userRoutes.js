const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../middleware/authentication')

const { getSingleUser, updateUser, updateUserPassword, updateUserFavorites } = require('../controllers/userController')

router.patch('/updateUser', authenticateUser, updateUser)

router.patch('/updateUserPassword', authenticateUser, updateUserPassword)

router.patch('/updateUserFavorites', authenticateUser, updateUserFavorites)

router.get('/:id', authenticateUser, getSingleUser)

module.exports = router
