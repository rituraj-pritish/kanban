const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const cardSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	comments: [
		{	
			date: { type: String, required: true },
			comment_by:	{ type: mongoose.Schema.Types.ObjectId, required: true },
			comment: { type: String, required: true }
		}
	],
	history: [
		{
			type: { type: String, required: true },
			done_by: { type: mongoose.Schema.Types.ObjectId, required: true },
			done_on: { type: String, required: true },
			from: String,
			to: String,
			field: String
		}
	],
	labels: [{ type: mongoose.Schema.Types.ObjectId, ref: REFS.LABEL }],
	created_at: { type: String, required: true },
	updated_at: { type: String, required: true }
})

module.exports = Card = mongoose.model(REFS.CARD, cardSchema)
