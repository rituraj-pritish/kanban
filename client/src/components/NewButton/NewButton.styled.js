import styled from 'styled-components'
import theme from 'theme'
import { darken } from 'polished'

export const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${theme.listWidth};
  background: ${theme.primaryLight};
  border-radius: ${theme.borderRadius};
  height: max-content;
  padding: ${({ havePadding, showInput }) => 
    havePadding && showInput && theme.spacing(0.5)};

  & > div {
    margin-top: ${({ havePadding, showInput }) =>
      havePadding && !showInput && 0};
  }

  & > textarea {
    margin-top: ${({ havePadding }) => havePadding && 0};
  }
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