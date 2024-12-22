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
	'shop',
]

const VALID_SORT_OPTIONS = ['price', '-price', 'rating', 'alphabetically', '-alphabetically', 'default']

const queryProductsValidator = (req, res, next) => {
	const { category } = req.params
	const { company, priceFrom, priceTo, available, promotion, sort, search } = req.query

	const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

	req.query.category = categoryName

	try {
		if (company) {
			const companyArray = company.split(',').map(item => item.trim())

			const isValid = companyArray.every(c => VALID_COMPANIES.includes(c))

			if (!isValid) {
				throw new CustomError.BadRequestError('No products with provided company name')
			}
		}

		if (categoryName && !VALID_CATEGORIES.includes(category)) {
			console.log('ta')
			throw new CustomError.BadRequestError('No products with provided category name')
		}

		if (priceFrom) {
			if (isNaN(Number(priceFrom)) || Number(priceFrom) <= 0) {
				throw new CustomError.BadRequestError('No products with provided price')
			}
		}

		if (priceTo) {
			if (isNaN(Number(priceTo)) || Number(priceTo) <= 0) {
				throw new CustomError.BadRequestError('No products with provided price')
			}
		}

		if (priceFrom && priceTo && Number(priceFrom) >= Number(priceTo)) {
			throw new CustomError.BadRequestError('No products with provided price')
		}

		if (available && available !== 'true') {
			throw new CustomError.BadRequestError('No products with provided available option')
		}

		if (promotion && promotion !== 'true') {
			throw new CustomError.BadRequestError('No products with provided promotion option')
		}

		if (sort && !VALID_SORT_OPTIONS.includes(sort)) {
			throw new CustomError.BadRequestError('No products with provided sort option')
		}

		if (search && search === '') {
			throw new CustomError.BadRequestError('No products with provided product name')
		}

		next()
	} catch (error) {
		next(error)
	}
}

module.exports = queryProductsValidator
