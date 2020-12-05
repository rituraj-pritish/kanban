const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const listSchema = new mongoose.Schema({
	title: { type: String, required: true },
	board_id: { type: String, required: true },
	cards: [{ type: mongoose.Schema.Types.ObjectId, ref: REFS.CARD }]
})

module.exports = List = mongoose.model(REFS.LIST, listSchema)