const mongoose = require('mongoose')
const REFS = require('../constants/refs')

const SECONDS_IN_A_DAY = 86400

const codeSchema = new mongoose.Schema({
	user_id: { type: String, required: true },
	code: { type: String, required: true },
	dateCreated: { type: Date, default: Date.now(), expires: SECONDS_IN_A_DAY }
})

module.exports = CODE = mongoose.model(REFS.VERIFICATION_CODE, codeSchema)
