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