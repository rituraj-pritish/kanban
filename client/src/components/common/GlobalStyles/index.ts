import PLACEMENTS from 'constants/placements'
import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

export const HDivider = styled.div`
  margin: ${theme.spacing(0.5)} 0;
  height: 1px;
  background: ${theme.colors.primary};
`

type FlexBoxProps = {
  justify?: string,
  align?: string
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${({ justify }) => justify ? justify : 'center'}; 
  align-items: ${({ align }) => align ? align : 'center'}; 
`

export const Error = styled.div`
  background: ${lighten(0.3, theme.colors.red)};
  color: ${theme.colors.red};
  padding: ${theme.spacing(0.5)};
  border-radius: ${theme.borderRadius};
  margin: ${theme.spacing(0.5)} 0;
`

type ButtonsWrapper = {
  position?: string
}

export const ButtonsWrapper = styled.div<ButtonsWrapper>`
  padding: ${theme.spacing()} 0;
  display: flex;
  justify-content: ${({ position }) => position === PLACEMENTS.LEFT
		? 'flex-start' : 'flex-end'};
  & > button {
    margin-right: ${({ position }) => position === PLACEMENTS.LEFT && theme.spacing()};
    margin-left: ${({ position }) => position === PLACEMENTS.RIGHT && theme.spacing()};
  }
`

ButtonsWrapper.defaultProps = {
	position: PLACEMENTS.RIGHT
}
