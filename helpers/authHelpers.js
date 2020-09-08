const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const keys = require('../config/keys')

module.exports = {
	//jwt related
	hashPassword: async password => {
		return await bcrypt.hash(password, 10)
	},
	signToken: id => {
		return jwt.sign({ id }, keys.jwtKey, {
			expiresIn: '1day'
		})
	},
	getUserIdFromToken: async token => {
		const res = await jwt.verify(token, keys.jwtKey)
		return res.id
	},
	verifyPassword: async (password, hashPassword) => {
		return await bcrypt.compare(password, hashPassword)
	}
}