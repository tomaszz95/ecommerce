const CustomError = require('../errors/index')

const { isTokenValid } = require('../utils/jwt')

const authenticateUser = async (req, res, next) => {
	const token = req.signedCookies.token

	if (!token) {
		throw new CustomError.UnauthenticatedError('Authentication invalid')
	}

	try {
		const { email, name, userId } = isTokenValid({ token })
		req.user = { email, name, userId }

		next()
	} catch (err) {
		throw new CustomError.UnauthenticatedError('Authentication invalid')
	}
}

module.exports = {
	authenticateUser,
}
