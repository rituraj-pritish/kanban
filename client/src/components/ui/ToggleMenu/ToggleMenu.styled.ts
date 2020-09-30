import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

export const Trigger = styled.div`
  ${theme.styles.centerElement};
  width: ${theme.spacing(1.7)};
  height: ${theme.spacing(1.7)};
  border-radius: ${theme.borderRadius};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.greyLight};
  }

  & > span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: black;
    margin: 1.5px;
  }
`

export const MenuWrapper = styled.div`
  position: relative;
`

export const Menu = styled.div`
  position: absolute;
  background: ${lighten(0.1, theme.colors.greyLight)};
  border-radius: ${theme.borderRadius};
  cursor: default;
  width: max-content;
  padding: ${theme.spacing(0.5)} 0;
  z-index: 5;

  & > div {
    background: ${lighten(0.1, theme.colors.greyLight)};
    padding: ${theme.spacing(0.5)} ${theme.spacing()};
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: ${lighten(0.2, theme.colors.greyLight)};
    }
  }
`