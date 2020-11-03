import styled from 'styled-components'
import theme from 'theme'
import { lighten } from 'polished'
import NewButton from 'components/NewButton'

export const ListWrapper = styled.div`
  border-radius: ${theme.borderRadius};
  width: ${theme.listWidth};
  background: ${theme.colors.primaryLight};
  padding: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing()};
  max-height: calc(100% - ${theme.spacing()});
  display: flex;
  flex-direction: column;
`

export const ListTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
  padding: ${theme.spacing(0.5)} ${theme.spacing(0.5)};
  background: ${lighten(0.03, theme.colors.primaryLight)};
  border-radius: ${theme.borderRadius};
  margin-bottom: ${theme.spacing(0.5)};
`

export const ListDivider = styled.div`
  padding: ${theme.spacing(0.01)};
`

export const CardsContainer = styled.div`
  overflow-y: auto;
  overflow-x: visible;

  // first card in list
  & > div:nth-child(2) {
    padding-top: 0;
  }
`

type StyledNewButton = {
  removeMargin: boolean
}

export const StyledNewButton = styled(NewButton)<StyledNewButton>`
  & > div {
    margin-top: ${({ removeMargin }) => removeMargin && 0};
  }
`