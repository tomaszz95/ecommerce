const VALID_SORT_OPTIONS = {
	price: 'price',
	'-price': '-price',
	rating: '-averageRating',
	alphabetically: 'name',
	'-alphabetically': '-name',
	default: '-createdAt',
}

const DEFAULT_LIMIT = 6

const queryProductsBuilder = query => {
	const { company, category, minPrice, maxPrice, available, isPromotion } = query

	const queryObject = {}

	if (company) {
		queryObject.company = company
	}

	if (category) {
		queryObject.category = category
	}

	if (minPrice || maxPrice) {
		queryObject.price = {}
		if (minPrice) queryObject.price.$gte = Number(minPrice)
		if (maxPrice) queryObject.price.$lte = Number(maxPrice)
	}

	if (available) {
		queryObject.stock = { $gt: 0 }
	}

	if (isPromotion) {
		queryObject['promotion.isPromotion'] = isPromotion === 'true'
	}

	return queryObject
}

const queryOptionsBuilder = query => {
	const { sort, page } = query

	const sortOption = VALID_SORT_OPTIONS[sort] || '-createdAt'
	const limit = DEFAULT_LIMIT
	const pageNum = Number(page) || 1
	const skip = (pageNum - 1) * limit

	return { sortOption, limit, skip, pageNum }
}

module.exports = {
	queryProductsBuilder,
	queryOptionsBuilder,
}
