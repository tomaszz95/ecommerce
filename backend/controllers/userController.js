const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse } = require('../utils/jwt')
const createTokenUser = require('../utils/createTokenUser')
const CustomError = require('../errors/index')

const getSingleUser = async (req, res) => {
	const user = await User.findOne({ _id: req.params.id }).select('-password')

	if (!user) {
		throw new CustomError.NotFoundError(`No user with id ${req.params.id}`)
	}

	res.status(StatusCodes.OK).json({ user })
}

const updateUser = async (req, res) => {
	const { email, name, address, postalCode, city, phone } = req.body

	if (!email || !name || !address || !postalCode || !city || !phone) {
		throw new CustomError.BadRequestError('Please provide all values')
	}

	if (email !== req.user.email) {
		const emailExists = await User.findOne({ email })

		if (emailExists) {
			throw new CustomError.BadRequestError('Email already in use')
		}
	}

	const existingUser = await User.findOne({ _id: req.user.userId })

	if (!existingUser) {
		throw new CustomError.NotFoundError('User not found')
	}

	const updatedUser = await User.findOneAndUpdate(
		{ _id: req.user.userId },
		{ email, name, informations: { address, postalCode, city, phone } },
		{ new: true, runValidators: true }
	)

	const tokenUser = createTokenUser({
		name: updatedUser.name,
		email: updatedUser.email,
		_id: updatedUser._id,
	})

	attachCookiesToResponse({ res, user: tokenUser })

	const { favorites, password, ...userResponse } = updatedUser.toObject()

	res.status(StatusCodes.OK).json({
		user: userResponse,
	})
}

const updateUserPassword = async (req, res) => {
	const { oldPassword, newPassword } = req.body

	if (!oldPassword || !newPassword) {
		throw new CustomError.BadRequestError('Please provide both values')
	}

	const user = await User.findOne({ _id: req.user.userId })

	const isPasswordCorrect = await user.comparePassword(oldPassword)

	if (!isPasswordCorrect) {
		throw new CustomError.UnauthenticatedError('Invalid Credentials')
	}

	user.password = newPassword

	await user.save()

	res.status(StatusCodes.OK).json({ msg: 'Password changed' })
}

const updateUserFavorites = async (req, res) => {
	const { productId } = req.body

	if (!productId) {
		throw new CustomError.BadRequestError('Please provide productId')
	}

	const user = await User.findOne({ _id: req.user.userId })

	if (!user) {
		throw new CustomError.NotFoundError('User not found')
	}

	const isFavorite = user.favorites.includes(productId)
	let updatedFavorites
	let favoriteMessage

	if (isFavorite) {
		updatedFavorites = user.favorites.filter(fav => fav.toString() !== productId)
		favoriteMessage = 'Product removed from favorites'
	} else {
		updatedFavorites = [...user.favorites, productId]
		favoriteMessage = 'Product added to favorites'
	}

	const updatedUser = await User.findOneAndUpdate(
		{ _id: req.user.userId },
		{ favorites: updatedFavorites },
		{ new: true, runValidators: true }
	)

	res.status(StatusCodes.OK).json({ msg: favoriteMessage, favorites: updatedUser.favorites })
}

module.exports = {
	getSingleUser,
	updateUser,
	updateUserPassword,
	updateUserFavorites,
}
