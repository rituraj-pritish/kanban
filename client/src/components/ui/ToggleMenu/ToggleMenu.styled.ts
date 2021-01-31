import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'
import PLACEMENTS from 'constants/placements'

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

type MenuWrapper = {
  usePosition: boolean
}

export const MenuWrapper = styled.div<MenuWrapper>`
  position: ${({ usePosition }) => !usePosition && 'relative'};   
`

interface Menu {
  placement: string,
  position: number[] | null
}

export const Menu = styled.div<Menu>`
  position: absolute;
  background: ${lighten(0.1, theme.colors.greyLight)};
  border-radius: ${theme.borderRadius};
  cursor: default;
  width: max-content;
  padding: ${theme.spacing(0.5)} 0;
  z-index: 5;
  right: ${({ placement }) => placement === PLACEMENTS.LEFT && 0};
  top: ${({ position }) => position && position[1] - 80 + 'px'};
  left: ${({ position }) => position && position[0] - 15 + 'px'};

  & > div:not(:first-of-type) {
    background: ${lighten(0.1, theme.colors.greyLight)};
    padding: ${theme.spacing(0.5)} ${theme.spacing()};
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: ${lighten(0.2, theme.colors.greyLight)};
    }
  }
`

export const TriggerWrapper = styled.div`
  cursor: pointer;
`

export const RootWrapper = styled.div`
  &:focus {
    outline: none;
  }
`