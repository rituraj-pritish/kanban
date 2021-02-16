import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
`

export const Plan = styled.div`
  background: white;
  padding: ${theme.spacing()};
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;

  // title
  & > div:first-child {
    font-size: ${theme.spacing(1.2)};
    font-weight: 500;
    text-transform: uppercase;
  }

  // price
  & > div:nth-child(3) {
    font-size: ${theme.spacing(1.2)};
    font-weight: 600;
    color: green;
  }
`


