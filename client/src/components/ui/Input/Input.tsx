import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: grey;
`

interface Props {
  [key: string]: any
}

const Input: React.FC<Props> = props => {
	return (
		<StyledInput {...props} />
	)
}

export default Input
