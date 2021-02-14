import React from 'react'
import { ButtonWrapper } from './IconButton.styled'

interface Props {
	icon: React.ReactNode,
	onClick?(e: React.MouseEvent<HTMLElement>): void,
	className?: string,
	isCircular?: boolean 
}

const IconButton: React.FC<Props> = ({ 
	icon, 
	onClick, 
	className, 
	isCircular,
	...otherProps 
}) => {
	return (
		<ButtonWrapper 
			isCircular={isCircular}
			onClick={onClick} 
			className={className} 
			{...otherProps}
		>
			{icon}
		</ButtonWrapper>
	)
}

export default IconButton
