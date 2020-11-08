import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/Logo.svg'
import { FlexGrow } from 'components/CommonStyles'
import { NavWrapper } from './Navbar.styled'

const Navbar: React.FC = () => {

	return (
		<NavWrapper>
			<Link to='/'>
				<Logo/>
			</Link>

			<FlexGrow/>
		</NavWrapper>
	)
}

export default Navbar
