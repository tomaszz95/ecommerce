const Order = require('../models/Order')
const Product = require('../models/Product')

const { StatusCodes } = require('http-status-codes')
const { isTokenValid } = require('../utils/jwt')
const CustomError = require('../errors/index')

const getOrder = async (req, res) => {
	const { orderId } = req.body

	const order = await Order.findOne({ _id: orderId }).select(
		'discount discountValue orderItems subtotal total user _id'
	)

	if (!order) {
		throw new CustomError.NotFoundError('Order not found')
	}

	let similarProducts

	if (order.orderItems.length > 0) {
		similarProducts = await Product.find({
			category: order.orderItems[0].category,
		})
			.select('_id name price category promotion uniqueId images')
			.limit(10)
			.lean()
		similarProducts.forEach(item => {
			item.image = item.images?.[0] || null
			item.promotion.promotionPrice = item.promotion.isPromotion
				? Math.round(item.price * (1 - item.promotion.promotionPercent / 100))
				: item.price.toFixed()
			delete item.images
		})
	} else {
		similarProducts = []
	}

	res.status(StatusCodes.OK).json({ order, similarProducts })
}

const addToCart = async (req, res) => {
	const { productId, orderId } = req.body

	if (!productId) {
		throw new CustomError.BadRequestError('Product ID is required')
	}

	let order, user, userType, userEmail, userName

	if (orderId) {
		order = await Order.findById(orderId)

		if (order && order.status !== 'Pending') {
			throw new CustomError.BadRequestError('Cannot add more products to this order')
		}
	}

	if (!order) {
		const token = req.signedCookies.token

		if (token) {
			try {
				const { userId, email, name } = isTokenValid({ token })
				user = userId
				userType = 'User'
				userEmail = email
				userName = name
			} catch (err) {
				throw new CustomError.UnauthenticatedError('Invalid token')
			}
		} else {
			user = `guest#${(await Order.countDocuments()) + 1}`
			userType = 'Guest'
			userEmail = ''
			userName = ''
		}

		order = await Order.create({
			user: user,
			userType: userType,
			orderItems: [],
			status: 'Pending',
			subtotal: 0,
			discount: 0,
			discountValue: 0,
			total: 0,
			delivery: {
				informations: {
					email: userEmail,
					name: userName,
				},
			},
			paymentIntentId: (await Order.countDocuments()) + 1,
		})
	}

	const existingProductIndex = order.orderItems.findIndex(item => item.product.toString() === productId)

	if (existingProductIndex !== -1) {
		const existingProduct = order.orderItems[existingProductIndex]

		existingProduct.amount += 1
		existingProduct.totalProductPrice = (existingProduct.amount * existingProduct.promotionPrice).toFixed()
		order.orderItems[existingProductIndex] = existingProduct
	} else {
		const dbProduct = await Product.findOne({ _id: productId })

		if (!dbProduct) {
			throw new CustomError.NotFoundError('Product not found')
		}

		const { name, price, images, category, stock, promotion } = dbProduct

		let productPrice = price

		if (promotion.isPromotion) {
			const promotionValue = (price * promotion.promotionPercent) / 100
			productPrice = (price - promotionValue).toFixed()
		}

		const totalProductPrice = productPrice

		const newOrderItem = {
			amount: 1,
			name,
			price,
			promotionPrice: productPrice,
			image: images[0],
			stock,
			promotion,
			category,
			product: productId,
			totalProductPrice: totalProductPrice,
		}

		order.orderItems.push(newOrderItem)
	}

	let subtotal = 0

	order.orderItems.forEach(item => {
		subtotal += item.totalProductPrice
	})

	order.subtotal = subtotal.toFixed()

	if (order.discountValue !== 0) {
		const discount = (subtotal * order.discountValue) / 100

		order.discount = discount.toFixed()
		order.total = (subtotal - discount).toFixed()
	} else {
		order.total = subtotal.toFixed()
	}

	await order.save()

	res.status(StatusCodes.OK).json({ orderId: order._id })
}

const getSingleOrder = async (req, res) => {
	const { orderId } = req.params

	if (!orderId) {
		throw new CustomError.BadRequestError('Please provide a valid order id')
	}

	const order = await Order.findOne({ _id: orderId, user: req.user.userId }).select(
		'-createdAt -user -userType -updatedAt'
	)

	if (!order) {
		throw new CustomError.NotFoundError(`Please provide a valid id`)
	}

	res.status(StatusCodes.OK).json({ order })
}

const getUserOrderList = async (req, res) => {
	const orders = await Order.find({ user: req.user.userId }).select('delivery total payment paymentIntentId status _id')

	res.status(StatusCodes.OK).json({ orders })
}

module.exports = {
	getOrder,
	addToCart,
	getSingleOrder,
	getUserOrderList,
}
