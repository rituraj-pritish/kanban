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
  color: ${({ isVerified }) => isVerified ? '#66c666' : '#E3B342'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const EmailSent = styled.div`
  background: #66c666;
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.5)};
  color: white;
`
