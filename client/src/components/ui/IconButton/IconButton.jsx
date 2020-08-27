import React from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper } from './IconButton.styled'

const IconButton = ({ icon, onClick }) => {
	return (
		<ButtonWrapper onClick={onClick} >
			{icon}
		</ButtonWrapper>
	)
}

IconButton.propTypes = {
	icon: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default IconButton
