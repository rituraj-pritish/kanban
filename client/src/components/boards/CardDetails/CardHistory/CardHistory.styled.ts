import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  padding: ${theme.spacing()} 0;
`

export const Time = styled.div`
  font-size: ${theme.spacing(0.8)};
  text-align: right;
  margin-top: ${theme.spacing(0.5)};
`

export const HistoryWrapper = styled.div`
  display: flex;
  align-items: baseline;

  & > div:last-child {
    margin-left: ${theme.spacing(0.8)};
    flex-grow: 1;
  }
`