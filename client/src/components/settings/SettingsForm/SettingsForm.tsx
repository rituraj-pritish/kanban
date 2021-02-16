import React, { useContext } from 'react'
import { Field, Form } from 'react-final-form'

import AuthContext from 'contexts/auth/AuthContext'
import TextFieldAdapter from 'components/common/ui/forms/TextFieldAdapter'
import EmailField from './EmailField'
import { FormWrapper } from './SettingsForm.styled'

const SettingsForm: React.FC = () => {
	const { user } = useContext(AuthContext)
	return (
		<FormWrapper>
			<Form
				initialValues={user}
				onSubmit={() => {}}
				render={({ handleSubmit }) => {
					return (
						<form id='id' onSubmit={handleSubmit}>
							<Field
								name='first_name'
								label='First Name'
								component={TextFieldAdapter}
							/>
							<EmailField isVerified={!!user?.is_verified}/>
						</form>
					)
				}}
			/>
		</FormWrapper>
	)
}

export default SettingsForm
