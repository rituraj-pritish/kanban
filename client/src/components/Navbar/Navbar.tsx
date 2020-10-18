import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { NavWrapper } from './Navbar.styled'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import Avatar from 'components/Avatar'
import ToggleMenu from 'components/ui/ToggleMenu'
import { FlexGrow } from 'components/CommonStyles'
import PLACEMENTS from 'constants/placements'

const Navbar: React.FC = () => {
	const client = useApolloClient()
	const history = useHistory()
	const { isAuthenticated, user } = useAuth()

	return (
		<NavWrapper>
			<Link to='/'>
				LOGO
			</Link>

			<FlexGrow/>
			
			{isAuthenticated && <ToggleMenu 
				trigger={<Avatar user={user}/>}
				placement={PLACEMENTS.LEFT}
				items={[
					{ text: 'Sign Out', onClick: () => {
						client.resetStore()
						localStorage.removeItem('auth_token')
						history.push('/')
					} }
				]}
			/>}
		</NavWrapper>
	)
}

export default Navbar
