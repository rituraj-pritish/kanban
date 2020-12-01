const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const listSchema = new mongoose.Schema({
	name: { type: String, required: true },
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: REFS.USER }]
})

module.exports = Team = mongoose.model('team', listSchema)