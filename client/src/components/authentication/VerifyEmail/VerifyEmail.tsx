import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { VERIFY_EMAIL } from 'graphql/mutations/user'
import Button from 'components/common/ui/Button'
import { RootWrapper } from './VerifyEmail.styled'
import useSearchParams from 'hooks/useSearchParams'

const VerifyEmail: React.FC = () => {
	const history = useHistory()
	const { code } = useSearchParams(['code'])
	const [verifyEmail, { error, data }] = useMutation(VERIFY_EMAIL)

	useEffect(() => {
		verifyEmail({ variables: {
			code }
		})
	}, [])
	
	return (
		<RootWrapper>
			{data && data.verifyEmail && 
				<Button onClick={() => history.replace('/')}>Go to app</Button>      
			}
			{error?.message}
		</RootWrapper>
	)
}

export default VerifyEmail
