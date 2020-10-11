import { lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'
import theme from 'theme'

const StyledInput = styled.input`
  background: ${lighten(0.05, theme.colors.primaryLight)};
	border: none;
	padding: ${theme.spacing(0.6)} ${theme.spacing(0.7)};
	border-radius: ${theme.borderRadius};
	font-size: ${theme.spacing(1)};
	width: -webkit-fill-available;
	margin: ${theme.spacing(0.5)} 0;

	&:focus, &:active {
		outline: none;
	}
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
