import styled from 'styled-components'
import theme from 'theme'
import { lighten, darken } from 'polished'
import { VARIANTS } from 'constants/button'

const getBgColor = (variant) => {
	switch(variant) {
	case VARIANTS.CANCEL:
		return '#BCB8BF'
	default:
		return theme.primary
	}
}

export const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: ${theme.spacing(0.4)} ${theme.spacing(1.5)};
  font-size: ${theme.spacing(1)};
  border-radius: ${theme.borderRadius};
  color: white;

  ${({ disabled, variant }) => {
		const bgColor = getBgColor(variant)
    
		return `
      background: ${disabled ? lighten(0.1, bgColor) : bgColor};
      cursor: ${disabled ? 'default' : 'pointer'};

      &:hover {
        background: ${!disabled && darken(0.05, bgColor)};
      }
    `}
};
`
