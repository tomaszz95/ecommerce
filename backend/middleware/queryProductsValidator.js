const CustomError = require('../errors/index')

const VALID_COMPANIES = [
	'Acer',
	'Apple',
	'Asus',
	'Intel',
	'Lenovo',
	'Logitech',
	'Microsoft',
	'Samsung',
	'Sony',
	'Xiaomi',
	'Dji',
	'Hp',
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

const VALID_SORT_OPTIONS = ['price', '-price', 'rating', 'alphabetically', '-alphabetically', 'default']

const queryProductsValidator = (req, res, next) => {
	const { category } = req.params

	const { company, priceFrom, priceTo, available, promotion, sort } = req.query

	const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

	req.query.category = categoryName

	try {
		if (company) {
			const companyArray = company.split(',').map(item => item.trim())

			const isValid = companyArray.every(c => VALID_COMPANIES.includes(c))

			if (!isValid) {
				throw new CustomError.BadRequestError("We didn't find what you were looking for")
			}
		}

		if (categoryName && !VALID_CATEGORIES.includes(category)) {
			throw new CustomError.BadRequestError("We didn't find what you were looking for")
		}

		if (priceFrom) {
			if (isNaN(Number(priceFrom)) || Number(priceFrom) <= 0) {
				throw new CustomError.BadRequestError("We didn't find what you were looking for")
			}
		}
		if (priceTo) {
			if (isNaN(Number(priceTo)) || Number(priceTo) <= 0) {
				throw new CustomError.BadRequestError("We didn't find what you were looking for")
			}
		}

		if (priceFrom && priceTo && Number(priceFrom) >= Number(priceTo)) {
			throw new CustomError.BadRequestError('Minimum price must be lower than maximum price')
		}

		if (available && available !== 'true') {
			throw new CustomError.BadRequestError("We didn't find what you were looking for")
		}

		if (promotion && promotion !== 'true') {
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
