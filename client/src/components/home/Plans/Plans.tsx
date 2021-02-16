import React from 'react'
import { useHistory } from 'react-router-dom'

import { Plan, RootWrapper } from './Plans.styled'
import DATA from './data.json'
import Button from 'components/common/ui/Button'

const Plans: React.FC = () => {
	const history = useHistory()
	return (
		<RootWrapper>
			{DATA.map(({ title, text, price, button, link }, idx) => 
				<Plan key={idx}>
					<div>{title}</div>
					<div>{text}</div>
					<div>${price}</div>
					<Button onClick={() => history.push(link)}>{button}</Button>
				</Plan>
			)}
		</RootWrapper>
	)
}

export default Plans
