import styled from 'styled-components'
import theme from 'theme'
import Input from '../Input'

export const ContentWrapper = styled.div`

`

export const Title = styled.div`
  font-size: ${theme.spacing(1.2)};
  font-weight: bold;
  text-align: center;
`

export const Text = styled.div`
  margin-top: ${theme.spacing()};
  margin-bottom: ${theme.spacing()};
`

export const ButtonsWrapper = styled.div`
  margin-top: ${theme.spacing()};
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: ${theme.spacing()};
  }
`

export const StyledInput = styled(Input)`
  margin: 0;
`