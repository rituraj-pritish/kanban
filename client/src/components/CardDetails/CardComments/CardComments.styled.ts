import styled from 'styled-components'
import theme from 'theme'

export const ActionButtons = styled.div`
  display: flex;

  div {
    text-decoration: underline;
    font-size: ${theme.spacing(0.85)};
    margin-right: ${theme.spacing(1.3)};
    cursor: pointer;
  }
`

export const CommentWrapper = styled.div`
  padding: ${theme.spacing()} ${theme.spacing(0.5)};
`