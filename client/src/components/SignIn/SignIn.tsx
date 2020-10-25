import React from 'react'
import { useLazyQuery } from '@apollo/client'

import { GET_USER, SIGN_IN } from 'graphql/queries/user'
import SignInForm from './SignInForm'
import { useHistory } from 'react-router-dom'

interface Values {
	email: string,
	password: string
}

interface Props {
	closeAuthModal: () => void
}

const SignIn: React.FC<Props> = ({ closeAuthModal }) => {
	const history = useHistory()
	const [signIn, { data, loading, called }] = useLazyQuery(SIGN_IN)
	const [getUser, res] = useLazyQuery(GET_USER)

	const handleSubmit = (values: Values) => {
		signIn({ variables: values })
	}

	if(called && !loading && data.signIn) {
		
		if(!res.loading && !res.called) {
			getUser({
				variables: {
					token: data.signIn.token
				}
			})
		}

		if(!res.loading && res.called && res.data.getUser) {
			localStorage.setItem('auth_token', data.signIn.token)
			// todo push to whatever the previous link was
			// in case of trying to access a specific page
			// and not logged in
			// thats why we are using modal sign authentication
			closeAuthModal()
			history.push('/')
		}
	}
  
	return (
		<>
			<SignInForm onSubmit={handleSubmit} />
			<div>
				Don't have an account{' '}
				<span onClick={() => history.push('/?auth=signup')} >
					sign up
				</span>
			</div>
		</>
	)
}

export default SignIn
