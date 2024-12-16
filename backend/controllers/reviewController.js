const Review = require('../models/Review')
const Product = require('../models/Product')

const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')
const checkPermissions = require('../utils/checkPermissions')

const createReview = async (req, res) => {
	const { rating, author, message, productId } = req.body

	const isValidProduct = await Product.findOne({ _id: productId })

	if (!isValidProduct) {
		throw new CustomError.NotFoundError(`No product found`)
	}

	const alreadySubmitted = await Review.findOne({
		product: productId,
		user: req.user.userId,
	})

	if (alreadySubmitted) {
		throw new CustomError.BadRequestError(`You have already submitted review for this product`)
	}

	req.body.user = req.user.userId

	const review = await Review.create({
		rating,
		author,
		message,
		product: productId,
		user: req.body.user,
	})

	res.status(StatusCodes.CREATED).json({ review })
}

const updateReview = async (req, res) => {
	const { rating, author, message, reviewId } = req.body

	const review = await Review.findOne({ _id: reviewId })

	if (!review) {
		throw new CustomError.NotFoundError(`No review found`)
	}

	checkPermissions(req.user, review.user)

	review.rating = rating
	review.author = author
	review.message = message

	await review.save()

	res.status(StatusCodes.OK).json({ review })
}

const deleteReview = async (req, res) => {
	const { reviewId } = req.body

	const review = await Review.findOne({ _id: reviewId })

	if (!review) {
		throw new CustomError.NotFoundError(`No review found`)
	}

	checkPermissions(req.user, review.user)

	await review.deleteOne()

	res.status(StatusCodes.OK).json({ msg: 'Review deleted' })
}

module.exports = {
	createReview,
	updateReview,
	deleteReview,
}
