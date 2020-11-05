import React from 'react'
import { ButtonWrapper } from './IconButton.styled'

interface Props {
	icon: React.ReactNode,
	onClick(e: React.MouseEvent<HTMLElement>): void,
	className?: string
}

const IconButton: React.FC<Props> = ({ icon, onClick, className }) => {
	return (
		<ButtonWrapper onClick={onClick} className={className} >
			{icon}
		</ButtonWrapper>
	)
}

export default IconButton
