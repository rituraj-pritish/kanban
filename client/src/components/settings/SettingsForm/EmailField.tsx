import React from 'react'
import { Field } from 'react-final-form'
import { useMutation } from '@apollo/client'

import { SEND_VERIFICATION_EMAIL } from 'graphql/mutations/user'
import TextFieldAdapter from 'components/common/ui/forms/TextFieldAdapter'
import { VerifiedStatus, EmailSent } from './SettingsForm.styled'
import Button from 'components/common/ui/Button'

type Props = {
  isVerified: boolean
}

const EmailField: React.FC<Props> = ({ isVerified }) => {
	const [send, { data, loading }] = useMutation(SEND_VERIFICATION_EMAIL)

	const handleClick = () => {
		return send()
	}

	return (
		<>
			<Field
				name='email'
				label='Email'
				component={TextFieldAdapter}
			/>
			<VerifiedStatus isVerified={isVerified}>
				{isVerified ? 'Verified' : 'Unverified'} 
				{data && data.sendVerificationEmail 
					? <EmailSent>Email Sent</EmailSent>
					: <Button type='button' onClick={handleClick} isLoading={loading}>
					Send verification email
					</Button>}
			</VerifiedStatus>
		</>
	)
}

export default EmailField
