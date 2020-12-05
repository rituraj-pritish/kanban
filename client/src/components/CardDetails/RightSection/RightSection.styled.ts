import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  margin-top: ${theme.spacing()};
  width: 30%;
  height: 100%;

  & > div {
    width: 100%;
    height: 2.5rem;
    background: ${theme.colors.greyLight};
  }
`
