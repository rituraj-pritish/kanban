const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	comments: [
		{
			comment_by:	{ type: mongoose.Schema.Types.ObjectId, required: true },
			comment: { type: String, required: true }
		}
	],
	history: [
		{
			activity: { type: String },
			type: { type: String, required: true },
			done_by: { type: mongoose.Schema.Types.ObjectId, required: true },
		}
	],
	created_at: { type: String, required: true },
	updated_at: { type: String, required: true }
})

module.exports = Card = mongoose.model('card', cardSchema)
