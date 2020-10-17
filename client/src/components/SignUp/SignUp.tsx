import React from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { SIGN_UP } from 'graphql/mutations/user'
import SignUpForm from './SignUpForm'

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
	const [signUp, { data, loading }] = useMutation(SIGN_UP)

	
	console.log('data', data)

	const handleSubmit = (values: Values) => {
		signUp({ variables: values })
	}
  
	return (
		<>
			<SignUpForm onSubmit={handleSubmit} />
			<div>
				Already have an account{' '}
				<span onClick={() => history.push('/?auth=signin')} >
					sign in
				</span>
			</div>
		</>
	)
}

export default SignIn
