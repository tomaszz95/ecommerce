const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')
const { queryProductsBuilder, queryOptionsBuilder } = require('../utils/queryProductsUtils')

const getFilteredProducts = async (req, res) => {
	const queryObject = queryProductsBuilder(req.query)

	const { sortOption, limit, skip, pageNum } = queryOptionsBuilder(req.query)

	const products = await Product.find(queryObject).sort(sortOption).skip(skip).limit(limit)

	const totalProducts = await Product.countDocuments(queryObject)

	res.status(StatusCodes.OK).json({
		products,
		count: products.length,
		totalProducts,
		totalPages: Math.ceil(totalProducts / limit),
		currentPage: pageNum,
	})
}

const getSingleProduct = async (req, res) => {
	const { id: productId } = req.params

	const product = await Product.findOne({ _id: productId }).populate('reviews')

	if (!product) {
		throw new CustomError.NotFoundError('No product found')
	}

	res.status(StatusCodes.OK).json({ product })
}

const createProduct = async (req, res) => {
	const product = await Product.create(req.body)

	res.status(StatusCodes.CREATED).json({ product })
}

module.exports = {
	getFilteredProducts,
	getSingleProduct,
	createProduct,
}