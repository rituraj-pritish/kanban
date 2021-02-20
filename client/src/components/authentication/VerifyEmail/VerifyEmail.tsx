import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'components/common/ui/Button'
import { RootWrapper } from './VerifyEmail.styled'

const VerifyEmail: React.FC = () => {
	const history = useHistory()
	return (
		<RootWrapper>
			<Button onClick={() => history.replace('/')}>Go to app</Button>      
		</RootWrapper>
	)
}

export default VerifyEmail
