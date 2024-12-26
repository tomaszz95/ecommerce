const User = require('../models/User')
const Product = require('../models/Product')

const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse } = require('../utils/jwt')
const validateDeliveryDetails = require('../utils/validateDeliveryDetails')
const createTokenUser = require('../utils/createTokenUser')
const CustomError = require('../errors/index')

const getSingleUser = async (req, res) => {
	const user = await User.findOne({ _id: req.user.userId }).select('-password -favorites')

	if (!user) {
		throw new CustomError.NotFoundError(`No user found`)
	}

	res.status(StatusCodes.OK).json(user)
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

	validateDeliveryDetails(null, null, { email, name, address, postalCode, city, phone })

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

	res.status(StatusCodes.OK).json('The user has been successfully updated')
}

const updateUserPassword = async (req, res) => {
	const { oldPassword, newPassword } = req.body

	if (!oldPassword || !newPassword) {
		throw new CustomError.BadRequestError('Please provide both values')
	}

	if (oldPassword === newPassword) {
		throw new CustomError.BadRequestError('Your old password is identical as new password. Please use another.')
	}

	const user = await User.findOne({ _id: req.user.userId })

	const isPasswordCorrect = await user.comparePassword(oldPassword)

	if (!isPasswordCorrect) {
		throw new CustomError.UnauthenticatedError('Please use a valid password')
	}

	user.password = newPassword

	await user.save()

	res.status(StatusCodes.OK).json({ msg: 'Password succesfully changed' })
}

const updateUserFavorites = async (req, res) => {
	const { productId } = req.body

	if (!productId) {
		throw new CustomError.BadRequestError('Please provide productId')
	}

	const product = await Product.findOne({ _id: productId })

	if (!product) {
		throw new CustomError.NotFoundError('No product found')
	}

	const user = await User.findOne({ _id: req.user.userId })

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

	await User.findOneAndUpdate(
		{ _id: req.user.userId },
		{ favorites: updatedFavorites },
		{ new: true, runValidators: true }
	)

	res.status(StatusCodes.OK).json({ msg: favoriteMessage })
}

const getUserFavorites = async (req, res) => {
	const user = await User.findOne({ _id: req.user.userId })
		.populate({
			path: 'favorites',
			select:
				'name price images category promotion uniqueId recommended company description stock averageRating numOfReviews _id',
		})
		.lean()

	if (!user) {
		throw new CustomError.NotFoundError('User not found')
	}

	const favorites = user.favorites.map(product => {
		product.image = product.images[0]
		delete product.images

		product.promotion = {
			...product.promotion,
			promotionPrice: product.promotion.isPromotion
				? Math.round(product.price * (1 - product.promotion.promotionPercent / 100))
				: product.price,
		}

		return {
			name: product.name,
			price: product.price,
			image: product.image,
			category: product.category,
			promotion: product.promotion,
			uniqueId: product.uniqueId,
			recommended: product.recommended,
			company: product.company,
			description: product.description,
			stock: product.stock,
			_id: product._id,
			averageRating: product.averageRating,
			numOfReviews: product.numOfReviews,
		}
	})

	res.status(StatusCodes.OK).json({ favorites })
}

module.exports = {
	getSingleUser,
	updateUser,
	updateUserPassword,
	updateUserFavorites,
	getUserFavorites,
}
