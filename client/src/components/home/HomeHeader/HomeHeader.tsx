import React from 'react'
import { useHistory } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/Logo.svg' 
import { LoginButton, LogoWrapper, RightSection, RootWrapper } from './HomeHeader.styled'
import Button from 'components/common/ui/Button'

const HomeHeader: React.FC = () => {
	const history = useHistory()

	return (
		<RootWrapper>
			<div/>
			<LogoWrapper>
				<Logo/>      
			</LogoWrapper>
			<RightSection>
				<LoginButton onClick={() => history.push('/?auth=signin')}>Log In</LoginButton>
				<div>or</div>
				<Button onClick={() => history.push('/?auth=signup')}>
					Sign Up
				</Button>
			</RightSection>
		</RootWrapper>
	)
}

export default HomeHeader
