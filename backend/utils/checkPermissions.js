const CustomError = require('../errors/index')

const checkPermissions = (requestUser, resourceUserId) => {
	if (requestUser.role === 'admin') return
	if (requestUser.userId === resourceUserId.toString()) return

	throw new CustomError.UnauthorizedError('Not authorized')
}

module.exports = checkPermissions
