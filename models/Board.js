const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
	name: { type: String, required: true }
})

module.exports = Board = ('board', boardSchema)