import styled from 'styled-components'

export const BoardWrapper = styled.div`
  display: flex;
  width: calc(100vw - 32px);
  height: calc(100vh - 68px);
  overflow: auto;

  & > div {
    display: flex;
  }
`