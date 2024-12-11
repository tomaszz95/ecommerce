const express = require('express')
const router = express.Router()

const { register, login, logout, checkIfLogged } = require('../controllers/authController')

router.get('/isLogged', checkIfLogged)

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

module.exports = router
