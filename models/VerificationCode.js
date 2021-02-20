const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const SECONDS_IN_AN_HOUR = 3600

const codeSchema = new mongoose.Schema({
	user_id: { type: String, required: true },
	code: { type: String, required: true },
	dateCreated: { type: Date, default: Date.now(), expires: SECONDS_IN_AN_HOUR }
})

module.exports = CODE = mongoose.model(REFS.VERIFICATION_CODE, codeSchema)
