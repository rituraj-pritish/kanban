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
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
  padding: ${theme.spacing(0.5)} ${theme.spacing(0.5)};
  background: ${lighten(0.03, theme.colors.primaryLight)};
  border-radius: ${theme.borderRadius};
`

export const ListDivider = styled.div`
  padding: ${theme.spacing(0.01)};
`

export const CardsContainer = styled.div`
  max-height: calc(100vh - 256px);
  overflow: auto;
`