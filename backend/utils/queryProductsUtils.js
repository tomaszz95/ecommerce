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
	const { company, category, priceFrom, priceTo, available, promotion, search } = query

	const queryObject = {}

	if (company) {
		const companyArray = company.split(',').map(c => c.trim())
		queryObject.company = {
			$in: companyArray.map(c => new RegExp(`^${c}$`, 'i')),
		}
	}

	if (category && category !== 'Shop') {
		queryObject.category = category
	}

	if (priceFrom || priceTo) {
		queryObject.price = {}
		if (priceFrom) queryObject.price.$gte = Number(priceFrom)
		if (priceTo) queryObject.price.$lte = Number(priceTo)
	}

	if (available) {
		queryObject.stock = { $gt: 0 }
	}

	if (promotion) {
		queryObject['promotion.isPromotion'] = promotion === 'true'
	}

	if (search) {
		queryObject.name = { $regex: search.trim(), $options: 'i' }
	}

	return queryObject
}

const queryOptionsBuilder = query => {
	const { sort, page } = query

	let sortOption
	if (sort === 'rating') {
		sortOption = { averageRating: -1, numOfReviews: -1 }
	} else if (sort === '-price') {
		sortOption = { 'promotion.promotionPrice': -1 }
	} else if (sort === 'price') {
		sortOption = { 'promotion.promotionPrice': 1 }
	} else if (sort === 'alphabetically') {
		sortOption = { name: 1 }
	} else if (sort === '-alphabetically') {
		sortOption = { name: -1 }
	} else {
		sortOption = { createdAt: -1 }
	}

	const limit = DEFAULT_LIMIT
	const pageNum = Number(page) || 1
	const skip = (pageNum - 1) * limit

	return { sortOption, limit, skip, pageNum }
}

module.exports = {
	queryProductsBuilder,
	queryOptionsBuilder,
}
