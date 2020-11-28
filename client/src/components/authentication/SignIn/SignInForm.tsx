import React from 'react'
import { Form, Field } from 'react-final-form'

import TextFieldAdapter from 'components/ui/forms/TextFieldAdapter'
import Button from 'components/ui/Button'
import { required } from 'helpers/validators'
import { FlexEndWrapper } from 'components/CommonStyles'

interface Props {
	isLoading: boolean,
  onSubmit: (values: { email: string, password: string }) => void
}

const SignInForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
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
						<FlexEndWrapper>
							<Button 
								type='submit'
								isLoading={isLoading}
							>Submit</Button>
						</FlexEndWrapper>
					</form>
				)
			}}
		/>
	)
}

export default SignInForm