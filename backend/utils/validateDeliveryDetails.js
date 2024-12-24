const { BadRequestError } = require('../errors')

const VALID_METHODS = ['Store', 'Courier']
const VALID_METHOD_WAYS = ['FeedEx', 'Inpost', 'UPS', 'Warsaw', 'Cracow', 'Katowice']

const validateDeliveryDetails = (method, methodWay, informations) => {
	if (method && !VALID_METHODS.includes(method)) {
		throw new BadRequestError(`Invalid delivery method: ${method}`)
	}

	if (methodWay && !VALID_METHOD_WAYS.includes(methodWay)) {
		throw new BadRequestError(`Invalid delivery method way: ${methodWay}`)
	}

	const { name, address, postalCode, city, phone, email } = informations || {}

	if (name && name.length < 3) {
		throw new BadRequestError('Name must have at least 3 characters')
	}

	if (address && !/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9\s]+\s\d+(\/\d+)?$/.test(address)) {
		throw new BadRequestError('Invalid address format')
	}

	if (postalCode && !/^(\d{2}-\d{3}|\d{5}|\d{2}\s\d{3})$/.test(postalCode)) {
		throw new BadRequestError('Invalid postal code format')
	}

	if (city && city.trim().length === 0) {
		throw new BadRequestError('City cannot be empty')
	}

	if (phone && !/^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$|^\d{3}\s?\d{3}\s?\d{3}$|^\d{9}$/.test(phone)) {
		throw new BadRequestError('Invalid phone number format')
	}

	if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		throw new BadRequestError('Invalid email address')
	}
}

module.exports = validateDeliveryDetails
