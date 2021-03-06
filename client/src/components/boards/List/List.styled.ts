import styled from 'styled-components'
import theme from 'theme'
import { lighten } from 'polished'
import NewButton from 'components/common/NewButton'
import IconButton from 'components/common/ui/IconButton'
import Input from 'components/common/ui/Input'

export const ListWrapper = styled.div`
  border-radius: ${theme.borderRadius};
  width: ${theme.listWidth};
  background: ${theme.colors.primaryLight};
  padding: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing()};
  max-height: calc(100% - ${theme.spacing(1.5)});
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled(Input)`
  margin: 0;
`

export const StyledIconButton = styled(IconButton)`
  margin: 0 ${theme.spacing(0.3)};
  opacity: 0;
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

  & > div {
    display: flex;
  }

  &:hover ${StyledIconButton} {
    opacity: 1;
  }
`

export const ListDivider = styled.div`
  padding: ${theme.spacing(0.01)};
`

export const CardsContainer = styled.div`
  border-radius: ${theme.borderRadius};
  overflow-y: auto;
  margin-right: ${theme.spacing(-0.25)};

  // first card in list
  & > div:nth-child(2) {
    padding-top: 0;

    // toggle menu
    & > div > div:last-child {
      top: ${theme.spacing(0.5)};
    }
  }
`

type StyledNewButtonProps = {
  removeMargin: boolean
}

export const StyledNewButton = styled(NewButton)<StyledNewButtonProps>`
  & > div {
    margin-top: ${({ removeMargin }) => removeMargin && 0};
  }
`

const SIZE = '25px'

export const TotalCards = styled.div`
  ${theme.styles.centerElement}
  display: inline-flex;
  margin-left: ${theme.spacing()};
  font-weight: 500;
  font-size: ${theme.spacing(0.95)};
  background: ${lighten(0.1, theme.colors.primary)};
  border-radius: 50%;
  width: ${SIZE};
  height: ${SIZE};
  color: white;
`