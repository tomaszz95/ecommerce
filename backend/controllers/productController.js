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
	const { uniqueId: uniqueId } = req.params

	const product = await Product.findOne({ uniqueId: uniqueId }).populate('reviews')

	if (!product) {
		throw new CustomError.NotFoundError('No product found')
	}

	res.status(StatusCodes.OK).json({ product })
}

const createProduct = async (req, res) => {
	const products = req.body

	const createdProducts = await Promise.all(
		products.map(async productData => {
			const product = await Product.create(productData)
			return product
		})
	)

	res.status(StatusCodes.CREATED).json({ products: createdProducts })
}

module.exports = {
	getFilteredProducts,
	getSingleProduct,
	createProduct,
}
