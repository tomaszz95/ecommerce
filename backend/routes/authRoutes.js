const express = require('express')
const router = express.Router()

const { checkNotLoggedIn, authenticateUser } = require('../middleware/authentication')

const { register, login, logout } = require('../controllers/authController')

router.get('/protected', authenticateUser, (req, res) => {
	res.status(200).json({ msg: 'You are authenticated', user: req.user })
})

router.post('/register', checkNotLoggedIn, register)

router.post('/login', checkNotLoggedIn, login)

router.get('/logout', logout)

module.exports = router
