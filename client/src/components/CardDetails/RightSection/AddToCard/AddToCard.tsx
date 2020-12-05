import React from 'react'

import useComponentVisible from 'hooks/useComponentVisible'
import { Content, Label, RootWrapper } from './AddToCard.styled'

type Props = {
	label: string,
	icon: React.ReactNode,
	children: React.ReactNode
}

const AddToCard: React.FC<Props> = ({
	label,
	icon,
	children
}) => {
	const [ref, showContent, setShowContent] = useComponentVisible(false)

	return (
		<RootWrapper>
			<Label onClick={() => setShowContent(true)}>
				<div>{icon}</div>
				<div>{label}</div>
			</Label>
			{showContent && <Content ref={ref} >{children}</Content>}
		</RootWrapper>
	)
}

export default AddToCard
