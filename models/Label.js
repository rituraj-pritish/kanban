const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const labelSchema = new mongoose.Schema({
	name: { type: String, required: true },
	bg_color: { type: String, required: true }
})

module.exports = Label = mongoose.model(REFS.LABEL, labelSchema)
