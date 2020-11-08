import React from 'react'
import { Link } from 'react-router-dom'

const Home:React.FC = () => {
	return (
		<div>
			HOME
			<Link to='/?auth=signin'>Sign In</Link>
		</div>
	)
}

export default Home
