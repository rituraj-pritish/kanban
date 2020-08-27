import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

const Button = ({ children, ...otherProps }) => {
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
