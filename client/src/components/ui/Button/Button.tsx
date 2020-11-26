import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

import { StyledButton } from './Button.styled'
import { VARIANTS } from 'constants/button'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
	variant?: string,
	disabled?: boolean,
	isLoading?: boolean,
	children: React.ReactNode
}

const Button: React.FC<Props> = ({ 
	variant = VARIANTS.PRIMARY,
	disabled = false,
	children,
	isLoading,
	...otherProps }) => {
	return (
		<StyledButton variant={variant} disabled={disabled} {...otherProps} >
			{/* @ts-expect-error */}
			{isLoading ? <PulseLoader color='white' size={8} /> : children}
		</StyledButton>
	)
}

export default Button
