const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	created_at: { type: String, required: true },
	updated_at: { type: String, required: true }
})

module.exports = Card = mongoose.model('card', cardSchema)
