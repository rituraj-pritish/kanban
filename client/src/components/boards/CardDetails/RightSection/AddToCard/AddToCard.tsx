import React from 'react'
import { CSSObject } from 'styled-components'
import { FiChevronLeft } from 'react-icons/fi'

import useComponentVisible from 'hooks/useComponentVisible'
import { Content, Label, RootWrapper, StyledIconButton, Title } from './AddToCard.styled'

type Props = {
	label: string,
	icon: React.ReactNode,
	children: React.ReactNode,
	contentStyles?: CSSObject | undefined,
	title: string,
	onBack?: () => void
}

const AddToCard: React.FC<Props> = ({
	label,
	icon,
	title,
	contentStyles,
	children,
	onBack
}) => {
	const [ref, showContent, setShowContent] = useComponentVisible(false)

	return (
		<RootWrapper>
			<Label onClick={() => setShowContent(true)}>
				<div>{icon}</div>
				<div>{label}</div>
			</Label>
			{showContent && 
				<Content contentStyles={contentStyles} ref={ref} >
					<Title>
						{onBack && <StyledIconButton icon={<FiChevronLeft/>} onClick={onBack} />}
						<div>
							{title}
						</div>
					</Title>
					{children}
				</Content>
			}
		</RootWrapper>
	)
}

export default AddToCard
