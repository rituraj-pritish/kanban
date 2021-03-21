import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: ${theme.spacing()};
`

export const Plan = styled.div`
  background: white;
  padding: ${theme.spacing()};
  width: 25%;
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 100%;
  }

  button {
    margin-top: auto;
  }
`

export const Title = styled.div`
  font-size: ${theme.spacing(1.2)};
  font-weight: 500;
  text-transform: uppercase;
`

export const Subtitle = styled.div`
  margin-bottom: ${theme.spacing()};
`

export const Price = styled.div`
  font-size: ${theme.spacing(1.2)};
  font-weight: 600;
  color: green;
  margin-bottom: ${theme.spacing()};
`