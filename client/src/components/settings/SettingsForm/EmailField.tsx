import React from 'react'
import { Field } from 'react-final-form'

import TextFieldAdapter from 'components/common/ui/forms/TextFieldAdapter'
import { VerifiedStatus } from './SettingsForm.styled'
import Button from 'components/common/ui/Button'

type Props = {
  isVerified: boolean
}

const EmailField: React.FC<Props> = ({ isVerified }) => {
	return (
		<>
			<Field
				name='email'
				label='First Name'
				component={TextFieldAdapter}
			/>
			<VerifiedStatus isVerified={isVerified}>
				{isVerified ? 'Verified' : 'Unverified'} 
				<Button>
					Send verification email
				</Button>
			</VerifiedStatus>
		</>
	)
}

export default EmailField
