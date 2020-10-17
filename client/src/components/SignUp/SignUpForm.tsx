import React from 'react'
import { Form, Field } from 'react-final-form'

import TextFieldAdapter from 'components/ui/forms/TextFieldAdapter'
import Button from 'components/ui/Button'
import { required } from 'helpers/validators'

interface Props {
  onSubmit: (values: { 
    name: string, 
    email: string, 
    password: string, 
    confirm_password: string 
  }) => void
}

const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Field
							name='first_name'
							label='First Name'
							validate={required}
							component={TextFieldAdapter}
							isRequired
						/>
						<Field
							name='last_name'
							label='Last Name'
							validate={required}
							component={TextFieldAdapter}
							isRequired
						/>
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
						<Field
							name='confirm_password'
							label='Confirm Password'
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

export default SignUpForm
