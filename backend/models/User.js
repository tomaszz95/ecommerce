const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
	name: { type: String, required: [true, 'Please provide name'], minlength: 3, maxlength: 50 },
	email: {
		type: String,
		unique: true,
		required: [true, 'Please provide email'],
		validate: {
			message: 'Please provide valid email',
			validator: validator.isEmail,
		},
	},
	password: { type: String, required: [true, 'Please provide password'], minlength: 8 },
	informations: {
		address: { type: String, default: '' },
		postalCode: { type: String, default: '' },
		city: { type: String, default: '' },
		phone: { type: String, default: '' },
	},
	favorites: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], default: [] },
})

UserSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(10)

	this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (canditatePassword) {
	const isMatch = await bcrypt.compare(canditatePassword, this.password)

	return isMatch
}

module.exports = mongoose.model('User', UserSchema)
