const Review = require('../models/Review')
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')

const createReview = async (req, res) => {
	const { product: productId } = req.body

	const isValidProduct = await Product.findOne({ _id: productId })

	if (!isValidProduct) {
		throw new CustomError.NotFoundError(`No product with found`)
	}

	const alreadySubmitted = await Review.findOne({
		product: productId,
		user: req.user.userId,
	})

	if (alreadySubmitted) {
		throw new CustomError.BadRequestError(`Already submitted review for this product`)
	}

	req.body.user = req.user.userId

	const review = await Review.create(req.body)

	res.status(StatusCodes.CREATED).json({ review })
}

const getAllReviews = async (req, res) => {
	const reviews = await Review.find({}).populate({ path: 'product', select: 'name company price' })

	res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}

const getSingleReview = async (req, res) => {
	const review = await Review.findOne({ _id: req.params.id }).populate({
		path: 'product',
		select: 'name company price',
	})

	if (!review) {
		throw new CustomError.NotFoundError(`No review with id ${req.params.id}`)
	}

	res.status(StatusCodes.OK).json({ review })
}

const updateReview = async (req, res) => {
	const { rating, title, comment } = req.body

	const review = await Review.findOne({ _id: req.params.id })

	if (!review) {
		throw new CustomError.NotFoundError(`No review with id ${req.params.id}`)
	}

	review.rating = rating
	review.title = title
	review.comment = comment

	await review.save()

	res.status(StatusCodes.OK).json({ review })
}

const deleteReview = async (req, res) => {
	const review = await Review.findOne({ _id: req.params.id })

	if (!review) {
		throw new CustomError.NotFoundError(`No review with id ${req.params.id}`)
	}

	await review.deleteOne()

	res.status(StatusCodes.OK).json({ msg: 'Review deleted' })
}

const getSingleProductReviews = async (req, res) => {
	const { id: productId } = req.params

	const reviews = await Review.find({ product: productId })

	res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}

module.exports = {
	createReview,
	getAllReviews,
	getSingleReview,
	updateReview,
	deleteReview,
	getSingleProductReviews,
}
