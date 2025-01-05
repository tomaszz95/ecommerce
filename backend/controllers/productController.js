const Product = require('../models/Product')

const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/index')
const { queryProductsBuilder, queryOptionsBuilder } = require('../utils/queryProductsUtils')
const { isTokenValid } = require('../utils/jwt')

const categories = [
	'Computers',
	'Laptops',
	'Accessories',
	'Hardware',
	'Gaming',
	'Streaming',
	'Smartphones',
	'Smartwatches',
]

const getHomepageProducts = async (req, res) => {
	const recommendedProducts = await Product.aggregate([
		{ $match: { recommended: true } },
		{ $group: { _id: '$category', product: { $first: '$$ROOT' } } },
		{ $limit: 8 },
		{ $replaceRoot: { newRoot: '$product' } },
		{
			$project: {
				name: 1,
				price: 1,
				image: { $arrayElemAt: ['$images', 0] },
				category: 1,
				promotion: {
					isPromotion: 1,
					promotionPercent: 1,
					promotionPrice: {
						$cond: [
							{ $eq: ['$promotion.isPromotion', true] },
							{
								$round: [
									{ $multiply: ['$price', { $subtract: [1, { $divide: ['$promotion.promotionPercent', 100] }] }] },
									0,
								],
							},
							'$price',
						],
					},
				},
				uniqueId: 1,
			},
		},
	])

	const latestProducts = await Product.aggregate([
		{ $sample: { size: 50 } },
		{ $group: { _id: '$category', product: { $first: '$$ROOT' } } },
		{ $limit: 6 },
		{ $replaceRoot: { newRoot: '$product' } },
		{
			$project: {
				name: 1,
				price: 1,
				image: { $arrayElemAt: ['$images', 0] },
				category: 1,
				promotion: 1,
				uniqueId: 1,
				promotion: {
					isPromotion: 1,
					promotionPercent: 1,
					promotionPrice: {
						$cond: [
							{ $eq: ['$promotion.isPromotion', true] },
							{
								$round: [
									{ $multiply: ['$price', { $subtract: [1, { $divide: ['$promotion.promotionPercent', 100] }] }] },
									0,
								],
							},
							'$price',
						],
					},
				},
			},
		},
	])

	const biggestDiscountProduct = await Product.findOne()
		.sort({ 'promotion.promotionPercent': -1 })
		.select('name price images category promotion uniqueId')
		.lean()

	if (biggestDiscountProduct) {
		biggestDiscountProduct.image = biggestDiscountProduct.images?.[0] || null
		biggestDiscountProduct.promotion = {
			...biggestDiscountProduct.promotion,
			promotionPrice: biggestDiscountProduct.promotion.isPromotion
				? Math.round(biggestDiscountProduct.price * (1 - biggestDiscountProduct.promotion.promotionPercent / 100))
				: biggestDiscountProduct.price,
		}
		delete biggestDiscountProduct.images
	}

	const productsByCategory = {}

	for (const category of categories) {
		const products = await Product.find({ category })
			.limit(10)
			.select('name price images category promotion uniqueId')
			.lean()

		products.forEach(product => {
			product.image = product.images[0]
			delete product.images

			product.promotion = {
				...product.promotion,
				promotionPrice: product.promotion.isPromotion
					? Math.round(product.price * (1 - product.promotion.promotionPercent / 100))
					: product.price,
			}
		})

		productsByCategory[category] = products
	}

	res.status(200).json({
		recommendedProducts,
		latestProducts,
		biggestDiscountProduct,
		productsByCategory,
	})
}

const getFilteredProducts = async (req, res) => {
	const queryObject = queryProductsBuilder({ ...req.query })
	const { sortOption, limit, skip, pageNum } = queryOptionsBuilder(req.query)

	const aggregationPipeline = [
		{ $match: queryObject },
		{
			$addFields: {
				'promotion.promotionPrice': {
					$cond: [
						{ $eq: ['$promotion.isPromotion', true] },
						{
							$round: [
								{
									$multiply: ['$price', { $subtract: [1, { $divide: ['$promotion.promotionPercent', 100] }] }],
								},
								0,
							],
						},
						'$price',
					],
				},
				image: { $arrayElemAt: ['$images', 0] },
			},
		},
		{ $sort: sortOption },
		{ $skip: skip },
		{ $limit: limit },
		{
			$project: {
				name: 1,
				price: 1,
				image: 1,
				category: 1,
				promotion: 1,
				uniqueId: 1,
				recommended: 1,
				company: 1,
				description: 1,
				stock: 1,
				averageRating: 1,
				numOfReviews: 1,
			},
		},
	]

	const products = await Product.aggregate(aggregationPipeline)

	const totalProducts = await Product.countDocuments(queryObject)

	res.status(StatusCodes.OK).json({
		products,
		totalProducts,
		totalPages: Math.ceil(totalProducts / limit),
		currentPage: pageNum,
	})
}

const getSingleProduct = async (req, res) => {
	const { uniqueId } = req.params
	const token = req.signedCookies.token

	let tokenData = {
		name: '',
		userId: '',
	}

	if (token) {
		tokenData = isTokenValid({ token })
	}

	const product = await Product.findOne({ uniqueId: uniqueId }).populate({
		path: 'reviews',
		select: 'author message rating _id user',
	})

	if (!product) {
		throw new CustomError.NotFoundError('No product found')
	}

	const promotionPrice = product.promotion.isPromotion
		? Math.round(product.price * (1 - product.promotion.promotionPercent / 100))
		: product.price

	const similarProducts = await Product.find({
		category: product.category,
		uniqueId: { $ne: uniqueId },
	})
		.select('_id name price category promotion uniqueId images')
		.limit(10)
		.lean()

	const mayInterestProducts = await Product.find({
		company: product.company,
		uniqueId: { $ne: uniqueId },
	})
		.select('_id name price category promotion uniqueId images')
		.limit(10)
		.lean()

	similarProducts.forEach(item => {
		item.image = item.images?.[0] || null
		item.promotion.promotionPrice = item.promotion.isPromotion
			? Math.round(item.price * (1 - item.promotion.promotionPercent / 100))
			: item.price
		delete item.images
	})

	mayInterestProducts.forEach(item => {
		item.image = item.images?.[0] || null
		item.promotion.promotionPrice = item.promotion.isPromotion
			? Math.round(item.price * (1 - item.promotion.promotionPercent / 100))
			: item.price
		delete item.images
	})

	res.status(StatusCodes.OK).json({
		product: {
			...product.toObject(),
			promotion: {
				...product.promotion,
				promotionPrice,
			},
		},
		similarProducts,
		mayInterestProducts,
		tokenData: {
			name: tokenData.name,
			userId: tokenData.userId,
		},
	})
}

module.exports = {
	getFilteredProducts,
	getSingleProduct,
	getHomepageProducts,
}
