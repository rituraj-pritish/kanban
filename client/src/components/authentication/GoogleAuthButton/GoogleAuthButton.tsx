import React from 'react'
import GoogleLogin from 'react-google-login'

import { ButtonWrapper } from './GoogleAuthButton.styled'

type Props = {
	[x: string]: any
}

const GoogleAuthButton: React.FC<Props> = props => {
	return null
	return (
		<ButtonWrapper>
			<GoogleLogin
				clientId='57413810912-05kvvvc2o9fb095opss3o8d3j1g1sfdt.apps.googleusercontent.com'
				{...props}
			/>
		</ButtonWrapper>
	)
}

export default GoogleAuthButton
