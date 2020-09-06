import styled from 'styled-components'
import theme from 'theme'

export const NavWrapper = styled.div`
  border-radius: ${theme.borderRadius};
  height: 50px;
  margin-bottom: ${theme.spacing()};
  border: 1px solid ${theme.colors.primaryLight};
  ${theme.styles.centerElement}
`
