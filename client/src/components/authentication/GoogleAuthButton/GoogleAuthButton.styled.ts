import styled from 'styled-components'
import theme from 'theme'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing()};

  button {
    border-radius: ${theme.borderRadius} !important;
    border: 1px solid #787a7e !important;
    box-shadow: none !important;
    font-size: ${theme.spacing(1.3)} !important;
    justify-content: center !important;

    & > div {
      border-radius: ${theme.borderRadius} !important;
      background: transparent !important;
    }
  }
`
