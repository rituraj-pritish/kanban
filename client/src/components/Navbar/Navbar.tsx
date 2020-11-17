import React from 'react'
import { Route } from 'react-router-dom'

import { NavWrapper } from './Navbar.styled'
import BoardNav from './BoardNav'

const Navbar: React.FC = () => {
	return (
		<NavWrapper>
			<Route exact path='/board/:boardId' component={BoardNav}/>
			<Route exact path='/boards' component={() => <div>Boards</div>}/>
		</NavWrapper>
	)
}

export default Navbar
