const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
	title: { type: String, required: true },
	board_id: { type: String, required: true },
	cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'card' }]
})

module.exports = List = mongoose.model('list', listSchema)