import React from 'react'

import HomeHeader from '../HomeHeader'
import Plans from '../Plans'
import { RootWrapper } from './Home.styled'

const Home:React.FC = () => {
	return (
		<RootWrapper>
			<HomeHeader/>
			<Plans/>
		</RootWrapper>
	)
}

export default Home
