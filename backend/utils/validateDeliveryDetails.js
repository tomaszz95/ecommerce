const { BadRequestError } = require('../errors')

const VALID_METHODS = ['Store', 'Courier']
const VALID_METHOD_WAYS = ['FeedEx', 'Inpost', 'UPS', 'Warsaw', 'Cracow', 'Katowice']

const validateDeliveryDetails = (method, methodWay, informations) => {
	const errors = []

	if (method && !VALID_METHODS.includes(method)) {
		errors.push(`Invalid delivery method: ${method}`)
	}

	if (methodWay && !VALID_METHOD_WAYS.includes(methodWay)) {
		errors.push(`Invalid delivery method way: ${methodWay}`)
	}

	const { name, address, postalCode, city, phone, email } = informations || {}

	if (name && name.length < 2) {
		errors.push('Name must have at least 3 characters')
	}

	if (address && !/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9\s]+\s\d+(\/\d+)?$/.test(address)) {
		errors.push('Invalid address format')
	}

	if (postalCode && !/^(\d{2}-\d{3}|\d{5}|\d{2}\s\d{3})$/.test(postalCode)) {
		errors.push('Invalid postal code format')
	}

	if (city && city.trim().length === 0) {
		errors.push('City cannot be empty')
	}

	if (phone && !/^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$|^\d{3}\s?\d{3}\s?\d{3}$|^\d{9}$/.test(phone)) {
		errors.push('Invalid phone number format')
	}

	if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.push('Invalid email address')
	}

	if (errors.length > 0) {
		throw new BadRequestError(errors)
	}
}

module.exports = validateDeliveryDetails
