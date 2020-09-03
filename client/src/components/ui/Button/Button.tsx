import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

interface Props {
	children: React.ReactNode,
}

const Button: React.FC<Props> = ({ children, ...otherProps }) => {
	return (
		<StyledButton {...otherProps} >
			{children}
		</StyledButton>
	)
}

Button.propTypes = {
	children: PropTypes.node
}

export default Button
