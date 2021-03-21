import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'components/common/ui/Button'
import DATA from './data.json'
import { Plan, Price, RootWrapper, Subtitle, Title } from './Plans.styled'

const Plans: React.FC = () => {
	const history = useHistory()
	return (
		<RootWrapper>
			{DATA.map(({ title, text, price, button, link }, idx) => 
				<Plan key={idx}>
					<Title>{title}</Title>
					<hr/>
					<Subtitle>{text}</Subtitle>
					{price && <Price>${price}</Price>}
					<Button onClick={() => history.push(link)}>{button}</Button>
				</Plan>
			)}
		</RootWrapper>
	)
}

export default Plans
