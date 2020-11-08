import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from 'components/Dashboard'
import Board from 'components/Board'
import AuthModal from 'components/AuthModal'
import Home from 'components/Home'
import ProtectedRoute from 'components/ProtectedRoute'
import Navbar from 'components/Navbar'
import AuthContext from 'contexts/auth/AuthContext'
import Sidebar from 'components/Sidebar'
import { RoutesWrapper, RouteWrapper } from './Routes.styled'

const Routes: React.FC = () => {
	const { isAuthenticated } = useContext(AuthContext)
  
	const authenticatedComponents = 
		<RoutesWrapper>
    	<Sidebar/>
			<div>
				<Navbar/>
				<RouteWrapper>
					<Switch>
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/board/:boardId' component={Board} />
					</Switch>
				</RouteWrapper>
			</div>
		</RoutesWrapper>
  

	const notAuthenticatedComponents = 
    <>
    	<AuthModal/>
    	<Route exact path='/' component={Home} />
    </>
  
  
	return isAuthenticated 
		? authenticatedComponents 
		: notAuthenticatedComponents 
}

export default Routes
