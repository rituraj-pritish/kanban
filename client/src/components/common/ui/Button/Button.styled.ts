import styled from 'styled-components'
import theme from 'theme'
import { lighten, darken } from 'polished'
import { VARIANTS } from 'constants/button'

const getBgColor = (variant: string) => {
	switch(variant) {
	case VARIANTS.DANGER:
		return '#EF6767'
	case VARIANTS.CANCEL:
		return '#BCB8BF'
	default:
		return theme.colors.primary
	}
}

interface StyledButton {
  variant: string,
  disabled?: boolean
}

export const StyledButton = styled.button<StyledButton>`
  border: none;
  outline: none;
  cursor: pointer;
  padding: ${theme.spacing(0.4)} ${theme.spacing(1.5)};
  font-size: ${theme.spacing(1)};
  border-radius: ${theme.borderRadius};
  color: white;
  position: relative;
  overflow: hidden;

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

type LoadingWrapper = {
  variant: string
}

export const LoadingWrapper = styled.div<LoadingWrapper>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ variant }) => lighten(0.1, getBgColor(variant))};
`