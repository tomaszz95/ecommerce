const User = require('../models/User')
const Order = require('../models/Order')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')
const { attachCookiesToResponse } = require('../utils/jwt')
const createTokenUser = require('../utils/createTokenUser')

const register = async (req, res) => {
	const { email, name, password, orderId } = req.body

	const emailAlreadyExist = await User.findOne({ email })

	if (emailAlreadyExist) {
		throw new CustomError.BadRequestError('Email already exists')
	}

	const user = await User.create({ email, name, password })

	let userId, userType

	if (orderId) {
		const order = await Order.findById(orderId)

		if (!order) {
			throw new CustomError.NotFoundError('Something went wrong. Please try again later')
		}

		userId = user._id
		userType = 'User'

		order.user = userId
		order.userType = userType

		await order.save()
	}

	const tokenUser = createTokenUser(user)

	attachCookiesToResponse({ res, user: tokenUser })

	res.status(StatusCodes.CREATED).json({ user: tokenUser, userId: userId, userType: userType })
}

const login = async (req, res) => {
	const { email, password, orderId } = req.body

	if (!email || !password) {
		throw new CustomError.BadRequestError('Please provide email and password!')
	}

	const user = await User.findOne({ email })

	if (!user) {
		throw new CustomError.UnauthenticatedError('Invalid Credentials')
	}

	const isPasswordCorrect = await user.comparePassword(password)

	if (!isPasswordCorrect) {
		throw new CustomError.UnauthenticatedError('Invalid Credentials')
	}

	let userId, userType

	if (orderId) {
		const order = await Order.findById(orderId)

		if (!order) {
			throw new CustomError.NotFoundError('Something went wrong. Please try again later')
		}

		userId = user._id
		userType = 'User'

		order.user = userId
		order.userType = userType

		await order.save()
	}

	const tokenUser = createTokenUser(user)

	attachCookiesToResponse({ res, user: tokenUser })

	res.status(StatusCodes.CREATED).json({ user: tokenUser, userId: userId, userType: userType })
}

const logout = async (req, res) => {
	const { orderId } = req.body

	let userId, userType

	if (orderId) {
		const order = await Order.findById(orderId)

		if (!order) {
			throw new CustomError.NotFoundError('Something went wrong. Please try again later')
		}

		userId = `guest#${order.paymentIntentId}`
		userType = 'Guest'

		order.user = userId
		order.userType = userType

		await order.save()
	}

	res.cookie('token', 'logout', {
		httpOnly: true,
		expires: new Date(Date.now()),
	})

	res.status(StatusCodes.OK).json({ msg: 'User logged out', userId: userId, userType: userType })
}

module.exports = { register, login, logout }
