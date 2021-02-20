const User = require('../../models/User')
const Code = require('../../models/VerificationCode')
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

		updateUser: async (_, values, { current_user }) => {
			const user = await User.findById(current_user)
			await user.update(values)
			await user.save()
			return {
				...user._doc,
				...values
			}
		},

		sendVerificationEmail: async (_, __, { current_user }) => {
			const user = await User.findById(current_user)
			const code = await utils.signToken(current_user, 86400)

			const msg = {
				to: user.email,
				from: {
					email: keys.appEmail,
					name: 'Kanban'
				}, 
				dynamic_template_data: {
					'button_url': `http://localhost:3000/auth/verify-email?code=${code}`
				},
				template_id: 'd-e177ad411b8046f9b7607e6a5577a698'
			}

			try {
				await sgMail.send(msg)
				
				await new Code({
					user_id: current_user,
					code
				}).save()

				return true
			} catch (error) {
				return false
			}
		},

		verifyEmail: async (_, { code }, { current_user }) => {
			const codeDoc = await Code.findOne(({ user_id: current_user }))

			if (!codeDoc) {
				throw new Error('The link is expired, go to the app resend verification email')
			}

			if(code === codeDoc.code) return true
		}
	}
}