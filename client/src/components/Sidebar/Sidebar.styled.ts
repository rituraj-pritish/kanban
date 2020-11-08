import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

type SidebarWrapper = {
  isCollapsed: boolean
}

export const SidebarWrapper = styled.div<SidebarWrapper>`
  position: relative;
  border-radius: ${theme.borderRadius};
  width: ${({ isCollapsed }) => !isCollapsed ? theme.spacing(14) : theme.spacing(3)};
  border: 1px solid ${theme.colors.primaryLight};
  margin-right: ${theme.spacing(0.4)};
`

type CollapseButton = {
  isCollapsed: boolean
}

export const CollapseButton = styled.div<CollapseButton>`
  position: absolute;
  right: -18px;
  top: 90px;

  & > div {
    background: ${theme.colors.greyLight};
    border-radius: 50%;

    &:hover {
      background: ${lighten(0.05, theme.colors.greyLight)};
    }

    & > svg {
      margin-right: ${({ isCollapsed }) => !isCollapsed && '2px'};
      margin-left: ${({ isCollapsed }) => isCollapsed && '2px'};
    }
  }
`