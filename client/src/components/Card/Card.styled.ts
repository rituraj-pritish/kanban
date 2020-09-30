import styled from 'styled-components'
import theme from 'theme'
import { lighten } from 'polished'

interface CardWrapper {
  isDragging: boolean
}

export const CardWrapper = styled.div<CardWrapper>`
  padding-top: ${theme.spacing(0.5)};
  cursor: pointer !important;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing(0.5)};
    border-radius: ${theme.borderRadius};
    background: ${({ isDragging }) => isDragging 
		? lighten(0.06, theme.colors.primaryLight) : 'white'};

    &:hover > div {
      opacity: 1;
    }

    & > div {
      opacity: 0;
    }
  }
`
