const CustomError = require('../errors/index')
const { isTokenValid } = require('../utils/jwt')

const authenticateUser = async (req, res, next) => {
	const token = req.signedCookies.token
	if (!token) {
		throw new CustomError.UnauthenticatedError('Authentication invalid')
	}

	try {
		const { name, userId, role } = isTokenValid({ token })
		req.user = { name, userId, role }
		next()
	} catch (err) {
		throw new CustomError.UnauthenticatedError('Authentication invalid')
	}
}

const authorizePermissions = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			throw new CustomError.UnauthorizedError('Unauthorized to acces this route')
		}

		next()
	}
}

module.exports = {
	authenticateUser,
	authorizePermissions,
}
