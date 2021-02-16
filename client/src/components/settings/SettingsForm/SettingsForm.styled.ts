import styled from 'styled-components'
import theme from 'theme'

export const FormWrapper = styled.div`
  max-width: ${theme.spacing(35)};
  margin: 0 auto;
`

type VerifiedStatus = {
  isVerified: boolean
}

export const VerifiedStatus = styled.div<VerifiedStatus>`
  color: ${({ isVerified }) => isVerified ? 'green' : '#E3B342'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
