import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

import { LoadingWrapper, StyledButton } from './Button.styled'
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
		<StyledButton variant={variant} disabled={disabled || isLoading} {...otherProps} >
			<div>{children}</div>
			{isLoading && 
				<LoadingWrapper variant={variant}>
					<PulseLoader color='white' size={8} />
				</LoadingWrapper>
			}
		</StyledButton>
	)
}

export default Button
