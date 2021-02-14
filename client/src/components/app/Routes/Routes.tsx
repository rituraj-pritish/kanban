import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Dashboard from 'components/Dashboard'
import Board from 'components/boards/Board'
import AuthModal from 'components/authentication/AuthModal'
import Home from 'components/Home'
import ProtectedRoute from 'components/common/ProtectedRoute'
import Navbar from 'components/Navbar'
import AuthContext from 'contexts/auth/AuthContext'
import Sidebar from 'components/Sidebar'
import { RoutesWrapper, RouteWrapper } from './Routes.styled'
import Boards from 'components/boards/Boards'

const Routes: React.FC = () => {
	const { isAuthenticated, loading } = useContext(AuthContext)

	const authenticatedComponents = 
		<RoutesWrapper>
    	<Sidebar/>
			<div>
				<Navbar/>
				<RouteWrapper>
					<Switch>
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/board/:boardId' component={Board} />
						<ProtectedRoute exact path='/boards' component={Boards}/>
						<Redirect from='*' to='/dashboard'/>
					</Switch>
				</RouteWrapper>
			</div>
		</RoutesWrapper>
  

	const notAuthenticatedComponents = 
    <>
    	<AuthModal/>
    	<Route exact path='/' component={Home} />
    	{/* TODO find a way to redirect gibrish to '/' */}
    	{/* {!loading && <Redirect from='*' to='/' />} */}
    </>
  
  
	return isAuthenticated 
		? authenticatedComponents 
		: notAuthenticatedComponents 
}

export default Routes
