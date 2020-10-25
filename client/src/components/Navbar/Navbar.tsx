import React, { useEffect, useState } from 'react'
import { useApolloClient, useLazyQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { NavWrapper } from './Navbar.styled'
import { Link } from 'react-router-dom'
import Avatar from 'components/Avatar'
import ToggleMenu from 'components/ui/ToggleMenu'
import { FlexGrow } from 'components/CommonStyles'
import PLACEMENTS from 'constants/placements'
import { GET_USER } from 'graphql/queries/user'

const Navbar: React.FC = () => {
	const client = useApolloClient()
	const history = useHistory()
	const [user, setUser] = useState(null)
	const token = window.localStorage.getItem('auth_token')
	const [getUser, { data, called, loading }] = useLazyQuery(GET_USER, { partialRefetch: true })

	useEffect(() => {
		if(!token) return setUser(null)
		
		getUser({ variables: { token } })

		if(data?.getUser && called && !loading) {
			setUser(data.getUser)
		}
	}, [token, data])

	const mock = {
		first_name: '',
		last_name: '',
		avatar_bg_color: '',
		is_admin: false
	}

	return (
		<NavWrapper>
			<Link to='/'>
				LOGO
			</Link>

			<FlexGrow/>

			{!user && <Link to='/?auth=signin'>Sign In</Link>}
			
			{user && <ToggleMenu 
				trigger={<Avatar user={user || mock}/>}
				placement={PLACEMENTS.LEFT}
				items={[
					{ text: 'Sign Out', onClick: () => {
						client.resetStore()
						localStorage.removeItem('auth_token')
						setUser(null)
						history.push('/')
					} }
				]}
			/>}
		</NavWrapper>
	)
}

export default Navbar
