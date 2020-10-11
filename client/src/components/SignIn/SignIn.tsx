import React from 'react'
import { useLazyQuery } from '@apollo/client'

import { SIGN_IN } from 'graphql/queries/user'
import SignInForm from './SignInForm'
import { useHistory } from 'react-router-dom'

interface Values {
	email: string,
	password: string
}


const SignIn: React.FC = () => {
	const history = useHistory()
	const [signIn, { data, loading, called }] = useLazyQuery(SIGN_IN)

	const handleSubmit = (values: Values) => {
		signIn({ variables: values })
	}

	if(called && !loading && data.signIn) {
		localStorage.setItem('auth_token', data.signIn.token)
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
