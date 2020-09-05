import React from 'react'
import { ButtonWrapper } from './IconButton.styled'

interface Props {
	icon: React.ReactNode,
	onClick(e: React.MouseEvent<HTMLElement>): void
}

const IconButton: React.FC<Props> = ({ icon, onClick }) => {
	return (
		<ButtonWrapper onClick={onClick} >
			{icon}
		</ButtonWrapper>
	)
}

export default IconButton
