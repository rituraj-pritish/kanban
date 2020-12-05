const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const boardSchema = new mongoose.Schema({
	name: { type: String, required: true },
	lists: [{ type: mongoose.Schema.Types.ObjectId, ref: REFS.LIST }],
	users: [{
		user: { type: mongoose.Schema.Types.ObjectId, ref: REFS.USER },
		is_admin: { type: Boolean, required: true }
	}]
})

module.exports = Board = mongoose.model(REFS.BOARD, boardSchema)