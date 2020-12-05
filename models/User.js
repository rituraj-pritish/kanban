const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const userSchema = new mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	avatar_bg_color: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, require: true },
	date_created: { type: String, required: true, default: new Date().toISOString() }
})

module.exports = User = mongoose.model(REFS.USER, userSchema)
