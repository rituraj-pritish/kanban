import React from 'react'
import { CSSObject } from 'styled-components'

import useComponentVisible from 'hooks/useComponentVisible'
import { Content, Label, RootWrapper } from './AddToCard.styled'

type Props = {
	label: string,
	icon: React.ReactNode,
	children: React.ReactNode,
	contentStyles?: CSSObject | undefined
}

const AddToCard: React.FC<Props> = ({
	label,
	icon,
	contentStyles,
	children
}) => {
	const [ref, showContent, setShowContent] = useComponentVisible(true)

	return (
		<RootWrapper>
			<Label onClick={() => setShowContent(true)}>
				<div>{icon}</div>
				<div>{label}</div>
			</Label>
			{showContent && <Content contentStyles={contentStyles} ref={ref} >{children}</Content>}
		</RootWrapper>
	)
}

export default AddToCard
