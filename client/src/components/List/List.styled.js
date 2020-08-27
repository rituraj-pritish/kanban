import styled from 'styled-components'
import theme from 'theme'
import { darken, lighten } from 'polished'

export const ListWrapper = styled.div`
  border-radius: ${theme.borderRadius};
  width: ${theme.listWidth};
  background: ${theme.primaryLight};
  padding: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing()};
`

export const ListTitle = styled.div`
  font-weight: bold;
  padding: ${theme.spacing(0.5)} ${theme.spacing(0.5)};
  background: ${lighten(0.03, theme.primaryLight)};
  border-radius: ${theme.borderRadius};
`

export const AddButton = styled.div`
  border-radius: ${theme.borderRadius};
  display: flex;
  cursor: pointer;
  padding: ${theme.spacing(0.5)} ${theme.spacing(0.3)};
  margin-top: ${theme.spacing(0.5)};

  div {
    margin-left: ${theme.spacing(0.2)};
  }

  &:hover {
    background: ${darken(0.05, theme.primaryLight)};
  }
`

export const StyledInput = styled.textarea`
  margin-top: ${theme.spacing(0.5)};
  outline: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  width: -webkit-fill-available ;
  border-radius: ${theme.borderRadius};
  font-size: ${theme.spacing(1.1)};
  padding: ${theme.spacing(0.5)};
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${theme.spacing(0.5)};
  
  button {
    margin-right: ${theme.spacing(0.5)};
  }
`