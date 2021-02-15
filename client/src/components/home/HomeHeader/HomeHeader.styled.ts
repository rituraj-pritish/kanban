import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  padding: ${theme.spacing()};
  ${theme.styles.centerElement};
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  margin-left: ${theme.spacing(12)};

  svg {
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
  }
`

export const LoginButton = styled.div`
  color: ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${lighten(0.1, theme.colors.primary)};
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: ${theme.spacing()};
  }

  & > div:nth-child(2) {
    color: ${lighten(0.1, theme.colors.primary)};
  } 
`