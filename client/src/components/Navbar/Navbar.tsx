import React from 'react'
import { NavWrapper } from './Navbar.styled'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
	return (
		<NavWrapper>
			<Link to='/'>
				LOGO
			</Link>
		</NavWrapper>
	)
}

export default Navbar
