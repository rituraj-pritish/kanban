const User = require('../../models/User')
const utils = require('../../helpers/authHelpers')
const keys = require('../../config/keys')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(keys.sendgridApiKey)

module.exports = {
	Query: {
		getUser: async (_, { token }) => {
			const userId = await utils.getUserIdFromToken(token)
			if (!userId) throw new Error('Invalid token')

			const user = await User.findById(userId).select('-password')

			if (!user) {
				throw new Error('No user found')
			}

			return user
		},

		signIn: async (_, { email, password }) => {
			const user = await User.findOne({ email })

			if (!user) {
				throw new Error('Invalid Credentials')
			}

			const isMatch = await utils.verifyPassword(password, user.password)

			if (!isMatch) {
				throw new Error('Invalid Credentials')
			}

			const token = utils.signToken(user._id)

			return { token, ...user._doc, password: null }
		}
	},

	Mutation: {
		signUp: async (_, { first_name, last_name, email, password, confirm_password }) => {
			const existingUser = await User.findOne({ email })

			if (existingUser) {
				throw new Error('Already registered, try signing in')
			}

			const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

			if (!emailExpression.test(String(email).toLowerCase())) {
				throw new Error('Please provide valid email address')
			}

			if (password !== confirm_password) {
				throw new Error('Passwords do not match')
			}

			const hashedPassword = await utils.hashPassword(password)

			const user = new User({
				first_name,
				last_name,
				email,
				password: hashedPassword
			})

			await user.save()

			const token = await utils.signToken(user._id)

			return { token, ...user._doc, password: null }
		},

		sendVerificationEmail: async (_, __, { current_user }) => {
			const user = await User.findById(current_user)

			const msg = {
				to: user.email,
				from: keys.appEmail, 
				subject: 'Verify Email',
				text: 'and easy to do anywhere, even with Node.js',
				html: '<strong>and easy to do anywhere, even with Node.js</strong>',
			}

			try {
				await sgMail.send(msg)
				return true
			} catch (error) {
				return false
			}
		}
	}
}