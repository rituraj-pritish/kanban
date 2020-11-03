import styled from 'styled-components'
import theme from 'theme'

export const BoardWrapper = styled.div`
  display: flex;
  height: calc(100vh - 68px);
  overflow: auto;

  // lists wrapper
  & > div:first-child {
    display: flex;

    // first list
    & > div:first-child {
      margin-left: ${theme.spacing()};
    }
  }
`

export const NewButtonWrapper = styled.div`
  padding-right: ${theme.spacing()};
`