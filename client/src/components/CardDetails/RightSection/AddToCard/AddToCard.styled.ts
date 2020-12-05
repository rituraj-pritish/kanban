import { darken } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  position: relative;
`

export const Label = styled.div`
  background: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.4)} ${theme.spacing(0.5)};
  cursor: pointer;
  display: flex;

  // icon
  & > div:first-child {
    margin-top: ${theme.spacing(0.35)};
    margin-right: ${theme.spacing(0.4)};
  }

  & > div {
    margin-top: ${theme.spacing(0.2)};
  }

  &:hover {
    background: ${darken(0.02, theme.colors.primaryLight)};
  }
`

export const Content = styled.div`
  background: white;
  position: absolute;
  padding: ${theme.spacing(0.5)};
  border-radius: ${theme.borderRadius};
  border: 1px solid lightgray;
  width: -webkit-fill-available;
  top: ${theme.spacing(2.5)};
`
