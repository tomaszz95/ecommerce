const CustomError = require('../errors/index')

const VALID_COMPANIES = [
	'acer',
	'apple',
	'asus',
	'intel',
	'lenovo',
	'logitech',
	'microsoft',
	'samsung',
	'sony',
	'xiaomi',
	'dji',
	'hp',
]
const VALID_CATEGORIES = [
	'computers',
	'laptops',
	'accessories',
	'hardware',
	'gaming',
	'streaming',
	'smartphones',
	'smartwatches',
]

const VALID_SORT_OPTIONS = ['price', '-price', 'reviews', 'alphabetically', '-alphabetically']

const queryProductsValidator = (req, res, next) => {
	const { company, category, minPrice, maxPrice, available, isPromotion, sort } = req.query

	try {
		if (company && !VALID_COMPANIES.includes(company)) {
			throw new CustomError.BadRequestError("We didn't find what you were looking for")
		}

		if (category && !VALID_CATEGORIES.includes(category)) {
			throw new CustomError.BadRequestError("We didn't find what you were looking for")
		}

		if (minPrice) {
			if (isNaN(Number(minPrice)) || Number(minPrice) <= 0) {
				throw new CustomError.BadRequestError("We didn't find what you were looking for")
			}
		}

		if (maxPrice) {
			if (isNaN(Number(maxPrice)) || Number(maxPrice) <= 0) {
				throw new CustomError.BadRequestError("We didn't find what you were looking for")
			}
		}

		if (minPrice && maxPrice && Number(minPrice) >= Number(maxPrice)) {
			throw new CustomError.BadRequestError('Minimum price must be lower than maximum price')
		}

		if (available && available !== 'true') {
			throw new CustomError.BadRequestError("We didn't find what you were looking for")
		}

		if (isPromotion && isPromotion !== 'true') {
			throw new CustomError.BadRequestError("We didn't find what you were looking for")
		}

		if (sort && !VALID_SORT_OPTIONS.includes(sort)) {
			throw new CustomError.BadRequestError("We didn't find what you were looking for")
		}
		next()
	} catch (error) {
		next(error)
	}
}

module.exports = queryProductsValidator
