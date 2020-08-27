import styled from 'styled-components'
import theme from 'theme'
import { lighten } from 'polished'

export const BoardWrapper = styled.div`
  display: flex;

  & > div {
    display: flex;
  }
`

export const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: ${theme.spacing(1.1)};
  height: max-content;
  background: ${lighten(0.05, theme.primaryLight)};
  width: -webkit-fill-available;
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.5)};

  &:hover {
    background: ${theme.primaryLight};
  }

  svg {
    margin-right: ${theme.spacing(0.5)};
  }
`

export const StyledInput = styled.textarea`
  outline: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  width: -webkit-fill-available ;
  border-radius: ${theme.borderRadius};
  font-size: ${theme.spacing(1.1)};
  padding: ${theme.spacing(0.5)};
`

export const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${theme.listWidth};
  background: ${theme.primaryLight};
  border-radius: ${theme.borderRadius};
  height: max-content;
  padding: ${({ removePadding }) => !removePadding && theme.spacing(0.5)};
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${theme.spacing(0.5)};

  button {
    margin-right: ${theme.spacing(0.5)};
  }
`