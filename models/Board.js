const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
	name: { type: String, required: true },
	user_id: { type: String, required: true },
	lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'list' }]
})

module.exports = Board = mongoose.model('board', boardSchema)