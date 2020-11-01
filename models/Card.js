const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String }
})

module.exports = Card = mongoose.model('card', cardSchema)
