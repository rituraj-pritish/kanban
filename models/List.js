const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
	title: { type: String, required: true }
})

module.exports = List = ('list', listSchema)