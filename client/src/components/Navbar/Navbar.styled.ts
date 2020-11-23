import styled from 'styled-components'
import theme from 'theme'

export const NavWrapper = styled.div`
  padding: 0 ${theme.spacing()};
  border-radius: ${theme.borderRadius};
  height: 50px;
  border: 1px solid ${theme.colors.primaryLight};
  display: flex;

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
  }
`

export const BoardNavWrapper = styled.div`
  // back icon & board name
  & > div:first-child {
    display: flex;
    align-items: center;
    
    // back icon
    & > div:first-child {
      margin-right: ${theme.spacing(0.5)};
    }
  }

  justify-content: space-between;
`

export const BoardsNavWrapper = styled.div`
  justify-content: space-between;

  button {
    margin-left: ${theme.spacing()};
  }
`