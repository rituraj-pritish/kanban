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
  padding: ${theme.spacing(0.5)};
`

type CollapseButtonWrapper = {
  isCollapsed: boolean
}

export const CollapseButtonWrapper = styled.div<CollapseButtonWrapper>`
  position: absolute;
  right: -18px;
  top: 90px;

  & > div {
    background: ${theme.colors.greyLight};

    &:hover {
      background: ${lighten(0.05, theme.colors.greyLight)};
    }

    & > svg {
      margin-right: ${({ isCollapsed }) => !isCollapsed && '2px'};
      margin-left: ${({ isCollapsed }) => isCollapsed && '2px'};
    }
  }
`

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  & > div:first-child {
    margin-right: ${theme.spacing(0.5)};
  }
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${theme.colors.primaryLight};
  margin: ${theme.spacing(0.5)} 0;
`