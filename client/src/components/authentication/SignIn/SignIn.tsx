import React, { useContext } from 'react'
import { useLazyQuery } from '@apollo/client'

import { SIGN_IN } from 'graphql/queries/user'
import SignInForm from './SignInForm'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from 'contexts/auth/AuthContext'
import { AUTH_SUCCESS } from 'contexts/types'
import GoogleAuthButton from '../GoogleAuthButton'
import { Error } from 'components/common/GlobalStyles'

interface Values {
	email: string,
	password: string
}

interface Props {
	closeAuthModal: () => void
}

const SignIn: React.FC<Props> = ({ closeAuthModal }) => {
	const { dispatch } = useContext(AuthContext)
	const history = useHistory()
	const [signIn, { data, loading, called, error }] = useLazyQuery(SIGN_IN)

	const handleSubmit = (values: Values) => {
		signIn({ variables: values })
	}

	if(called && !loading && !error && data.signIn) {
		localStorage.setItem('auth_token', data.signIn.token)
		dispatch({
			type: AUTH_SUCCESS,
			payload: data.signIn
		})


		// todo push to whatever the previous link was
		// in case of trying to access a specific page
		// and not logged in
		// thats why we are using modal sign authentication
		closeAuthModal()
		history.push('/')
	}
  
	return (
		<>
			{!!error && <Error>{error.message}</Error>}
			<SignInForm onSubmit={handleSubmit} isLoading={loading} />
			<div>
				Don't have an account{' '}
				<Link onClick={() => history.push('/?auth=signup')} to='/?auth=signup' >
					sign up
				</Link>
			</div>
			<GoogleAuthButton/>
		</>
	)
}

export default SignIn
