import React, { useContext } from 'react'
import { Field, Form } from 'react-final-form'
import { useMutation } from '@apollo/client'

import { UPDATE_USER } from 'graphql/mutations/user'
import AuthContext from 'contexts/auth/AuthContext'
import TextFieldAdapter from 'components/common/ui/forms/TextFieldAdapter'
import EmailField from './EmailField'
import { FormWrapper } from './SettingsForm.styled'
import Button from 'components/common/ui/Button'
import { ButtonsWrapper } from 'components/common/GlobalStyles'
import { GET_USER } from 'graphql/queries/user'

const SETTINGS_FORM_ID = 'SETTINGS_FORM_ID'

type Values = {
  first_name: string,
  last_name: string,
	email: string
}

const SettingsForm: React.FC = () => {
	const { user } = useContext(AuthContext)
	const [updateUser, { loading }] = useMutation(UPDATE_USER)

	const handleSubmit = (values: Values) => {
		updateUser({
			variables: values,
			update: (cache, { data: { updateUser } }) => {
				cache.writeQuery({
					query: GET_USER,
					variables: { user_id: user?._id },
					data: { data: { getUser: updateUser } }
				})
			}
		})
	}

	return (
		<FormWrapper>
			<Form
				initialValues={user}
				onSubmit={handleSubmit}
				render={({ handleSubmit, dirty }) => {
					return (
						<form id={SETTINGS_FORM_ID} onSubmit={handleSubmit}>
							<Field
								name='first_name'
								label='First Name'
								component={TextFieldAdapter}
							/>
							<Field
								name='last_name'
								label='Last Name'
								component={TextFieldAdapter}
							/>
							<EmailField isVerified={!!user?.is_verified}/>
							<ButtonsWrapper>
								<Button isLoading={loading} disabled={!dirty}>Save</Button>
							</ButtonsWrapper>
						</form>
					)
				}}
			/>
		</FormWrapper>
	)
}

export default SettingsForm
