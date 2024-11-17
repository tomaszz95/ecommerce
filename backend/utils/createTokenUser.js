const createTokenUser = user => {
	return { email: user.email, name: user.name, userId: user._id }
}

module.exports = createTokenUser
