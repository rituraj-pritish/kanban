import styled from 'styled-components'
import { lighten } from 'polished'
import theme from 'theme'

const ICON_SIZE = theme.spacing(1.75)

type ButtonWrapper = {
  isCircular?: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapper>`
  cursor: pointer;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  border-radius: ${({ isCircular }) => isCircular ? '50%' : theme.borderRadius};
  ${theme.styles.centerElement}

  &:hover {
    background: #0000001a;
  }

  &:hover svg {
    color: black;
  }

  svg {
    color: ${lighten(0.25, 'black')};
  }
`
