import styled from 'styled-components'
import theme from 'theme'

export const BoardWrapper = styled.div`
  display: flex;
  height: calc(100vh - 90px);
  overflow: auto;

  // lists wrapper
  & > div:first-child {
    display: flex;
  }
`

export const NewButtonWrapper = styled.div`

`