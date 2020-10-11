import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const Home:React.FC = () => {
	const token = window.localStorage.getItem('auth_token')
	if(token) return <Redirect to='/dashboard' />

	return (
		<Link to='/?auth=signin'>Sign In</Link>
	)
}

export default Home
