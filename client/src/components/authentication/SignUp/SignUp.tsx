import React from 'react'
import { useMutation } from '@apollo/client'
import { Link, useHistory } from 'react-router-dom'

import { SIGN_UP } from 'graphql/mutations/user'
import SignUpForm from './SignUpForm'
import GoogleAuthButton from '../GoogleAuthButton'
import { Error } from 'components/common/GlobalStyles'

interface Values {
  name: string,
	email: string,
  password: string,
  confirm_password: string
}

interface Props {
	closeAuthModal: () => void
}

const SignIn: React.FC<Props> = ({ closeAuthModal }) => {
	const history = useHistory()
	const [signUp, { data, loading, error }] = useMutation(SIGN_UP)

	const handleSubmit = (values: Values) => {
		signUp({ variables: values })
			.catch(err => () => {})
	}
  
	return (
		<>
			{!!error && <Error>{error.message}</Error>}
			<SignUpForm onSubmit={handleSubmit} isLoading={loading} />
			<div>
				Already have an account{' '}
				<Link onClick={() => history.push('/?auth=signin')} to='/?auth=signin' >
					sign in
				</Link>
			</div>
			<GoogleAuthButton
				buttonText='Sign up with Google'
			/>
		</>
	)
}

export default SignIn
