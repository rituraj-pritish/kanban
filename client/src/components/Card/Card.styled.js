import styled from 'styled-components'
import theme from 'theme'
import { lighten } from 'polished'

export const CardWrapper = styled.div`
  padding-top: ${theme.spacing(0.5)};
  cursor: pointer !important;

  & > div {
    padding: ${theme.spacing(0.5)};
    border-radius: ${theme.borderRadius};
    background: ${({ isDragging }) => isDragging 
		? lighten(0.06, theme.primaryLight) : 'white'};
  }
`
