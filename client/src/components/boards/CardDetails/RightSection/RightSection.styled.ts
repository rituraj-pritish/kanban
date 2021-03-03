import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  margin-top: ${theme.spacing()};
  width: 30%;
  height: 100%;
`

export const Date = styled.div`
  display: flex;
  font-size: ${theme.spacing(0.9)};
  margin-top: ${theme.spacing(0.5)};

  & > span {
    margin-right: ${theme.spacing(0.5)};
  }
`