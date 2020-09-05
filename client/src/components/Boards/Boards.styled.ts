import styled from 'styled-components'
import theme from 'theme'

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`

export const BoardCard = styled.div`
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  background: #eee;
  padding: ${theme.spacing(0.5)};
`
