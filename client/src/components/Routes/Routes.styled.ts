import styled from 'styled-components'
import theme from 'theme'

export const RoutesWrapper = styled.div`
  display: flex;
  width: calc(100vw - ${theme.spacing(0.8)});
  height: calc(100vh - ${theme.spacing(0.8)});
  padding: ${theme.spacing(0.4)};

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }
`

export const RouteWrapper = styled.div`
  flex: 1;
  margin-top: ${theme.spacing(0.4)};
  border: 1px solid ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.5)} ${theme.spacing()};
`