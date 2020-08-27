import styled from 'styled-components'
import { lighten } from 'polished'
import theme from 'theme'

const ICON_SIZE = theme.spacing(1.75)

export const ButtonWrapper = styled.div`
  cursor: pointer;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  border-radius: ${theme.borderRadius};
  ${theme.centerElement}

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
