import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${theme.colors.primaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
`
