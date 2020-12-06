const mongoose = require('mongoose')
const defaultLabels = require('../constants/defaultLabels')
const REFS = require('../constants/refs')

const boardSchema = new mongoose.Schema({
	name: { type: String, required: true },
	lists: [{ type: mongoose.Schema.Types.ObjectId, ref: REFS.LIST }],
	users: [{
		user: { type: mongoose.Schema.Types.ObjectId, ref: REFS.USER },
		is_admin: { type: Boolean, required: true }
	}],
	labels:{ type: [{
		name: String,
		bg_color: String
	}], ref: REFS.LABEL, default: defaultLabels }
})

module.exports = Board = mongoose.model(REFS.BOARD, boardSchema)