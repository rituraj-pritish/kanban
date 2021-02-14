import styled from 'styled-components'
import theme from 'theme'
import { lighten } from 'polished'
import LabelRenderer from 'components/boards/CardDetails/Labels/LabelRenderer'

export const ToggleMenuWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: ${theme.spacing()};
  right: ${theme.spacing(0.5)};
`

interface CardWrapper {
  isDragging: boolean
}

export const CardWrapper = styled.div<CardWrapper>`
  padding-top: ${theme.spacing(0.5)};
  cursor: pointer !important;
  margin-right: ${theme.spacing(0.25)};
  position: relative;

  &:hover ${ToggleMenuWrapper} {
    opacity: 1;
  }

  // card
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: ${theme.spacing(1.6)};
    padding: ${theme.spacing(0.5)};
    border-radius: ${theme.borderRadius};
    background: ${({ isDragging }) => isDragging 
		? lighten(0.06, theme.colors.primaryLight) : 'white'};
  }
`

export const StyledLabelRenderer = styled(LabelRenderer)`
  margin-bottom: ${theme.spacing(0.5)};
`