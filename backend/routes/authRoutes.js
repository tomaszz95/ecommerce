const express = require('express')
const router = express.Router()

const { checkNotLoggedIn } = require('../middleware/authentication')

const { register, login, logout } = require('../controllers/authController')

router.post('/register', checkNotLoggedIn, register)

router.post('/login', login)

router.get('/logout', logout)

module.exports = router
