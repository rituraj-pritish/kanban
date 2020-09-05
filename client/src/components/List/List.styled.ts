import styled from 'styled-components'
import theme from 'theme'
import { lighten } from 'polished'

export const ListWrapper = styled.div`
  border-radius: ${theme.borderRadius};
  width: ${theme.listWidth};
  background: ${theme.colors.primaryLight};
  padding: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing()};
`

export const ListTitle = styled.div`
  font-weight: bold;
  padding: ${theme.spacing(0.5)} ${theme.spacing(0.5)};
  background: ${lighten(0.03, theme.colors.primaryLight)};
  border-radius: ${theme.borderRadius};
`
