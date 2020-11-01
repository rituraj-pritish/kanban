import styled from 'styled-components'
import Label from '../Label'
import theme from 'theme'

export const StyledLabel = styled(Label)`
  margin-bottom: ${theme.spacing(0.5)};
`

export const AdapterWrapper = styled.div`
`

export const Content = styled.div`
  min-height: ${theme.spacing(2)};
  padding: ${theme.spacing(0.4)} ${theme.spacing(0.6)};
  background: ${theme.colors.inputBg};
`