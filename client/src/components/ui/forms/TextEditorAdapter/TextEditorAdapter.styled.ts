import styled from 'styled-components'
import Label from '../Label'
import theme from 'theme'
import { darken } from 'polished'

export const StyledLabel = styled(Label)`
  margin-bottom: ${theme.spacing(0.5)};
`

export const AdapterWrapper = styled.div`
`

export const Content = styled.div`
  min-height: ${theme.spacing(2)};
  padding: ${theme.spacing(0.4)} ${theme.spacing(0.6)};
  background: ${theme.colors.inputBg};

  &:hover {
    background: ${darken(0.01, theme.colors.inputBg)};
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: ${theme.spacing(0.5)};

  button {
    margin-right: ${theme.spacing(0.5)};
  }
`