import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'
import styled from 'styled-components'
import theme from 'theme'

const SpinnerWrapper = styled.div`
  ${({ centerOfParent }) =>
		centerOfParent &&
    `
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
	`};
`

const Spinner = ({ color, size, loading, centerOfParent }) => {
	return (
		<SpinnerWrapper centerOfParent={centerOfParent}>
			<PuffLoader loading={loading} color={color} size={size} />
		</SpinnerWrapper>
	)
}

Spinner.defaultProps = {
	size: 50,
	color: theme.colors.primary
}

export default Spinner
