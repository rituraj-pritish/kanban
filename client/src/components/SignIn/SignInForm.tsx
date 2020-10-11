import React from 'react'
import { Form, Field } from 'react-final-form'

import TextFieldAdapter from 'components/ui/forms/TextFieldAdapter'
import Button from 'components/ui/Button'
import { required } from 'helpers/validators'

interface Props {
  onSubmit: (values: { email: string, password: string }) => void
}

const SignInForm: React.FC<Props> = ({ onSubmit }) => {
	return (
		<Form
			initialValues={{
				email: 'jd@gmail.com',
				password: '123456'
			}}
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Field
							name='email'
							label='Email'
							validate={required}
							component={TextFieldAdapter}
							isRequired
						/>
						<Field
							name='password'
							label='Password'
							inputType='password'
							validate={required}
							component={TextFieldAdapter}			
							isRequired
						/>
						<Button type='submit' >Submit</Button>
					</form>
				)
			}}
		/>
	)
}

export default SignInForm
