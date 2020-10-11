const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, require: true },
	date_created: { type: String, required: true, default: new Date().toISOString() }
})

module.exports = User = mongoose.model('user', userSchema)
