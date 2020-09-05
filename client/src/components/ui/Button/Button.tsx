import React from 'react'

import { StyledButton } from './Button.styled'
import { VARIANTS } from 'constants/button'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
	variant?: string,
	disabled?: boolean,
	children: React.ReactNode
}

const Button: React.FC<Props> = ({ 
	variant = VARIANTS.PRIMARY,
	disabled = false,
	children,
	...otherProps }) => {
	return (
		<StyledButton variant={variant} disabled={disabled} {...otherProps} >
			{children}
		</StyledButton>
	)
}

export default Button
