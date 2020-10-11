import React from 'react'
import { Form, Field } from 'react-final-form'

interface Props {
  onSubmit: () => void
}

const SignInForm: React.FC<Props> = ({ onSubmit }) => {
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
            
					</form>
				)
			}}
		/>
	)
}

export default SignInForm
