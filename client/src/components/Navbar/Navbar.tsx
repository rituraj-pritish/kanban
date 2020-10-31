import React, { useContext } from 'react'

import { NavWrapper } from './Navbar.styled'
import { Link } from 'react-router-dom'
import Avatar from 'components/Avatar'
import ToggleMenu from 'components/ui/ToggleMenu'
import { FlexGrow } from 'components/CommonStyles'
import PLACEMENTS from 'constants/placements'
import AuthContext from 'contexts/auth/AuthContext'

const mock = {
	first_name: '',
	last_name: '',
	avatar_bg_color: '',
	is_admin: false
}

const Navbar: React.FC = () => {
	const { user, signOut } = useContext(AuthContext)

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
					{ text: 'Sign Out', onClick: signOut }
				]}
			/>}
		</NavWrapper>
	)
}

export default Navbar
