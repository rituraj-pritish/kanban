import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

type SidebarWrapper = {
  isCollapsed: boolean
}

export const SidebarWrapper = styled.div<SidebarWrapper>`
  position: relative;
  border-radius: ${theme.borderRadius};
  width: ${({ isCollapsed }) => !isCollapsed ? theme.spacing(14) : theme.spacing(3.15)};
  border: 1px solid ${theme.colors.primaryLight};
  margin-right: ${theme.spacing(0.4)};
  padding: ${theme.spacing(0.5)};
  transition: width 0.2s;
`

type CollapseButtonWrapper = {
  isCollapsed: boolean
}

export const CollapseButtonWrapper = styled.div<CollapseButtonWrapper>`
  position: absolute;
  right: -18px;
  top: 105px;

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

type UserDetails = {
  isCollapsed: boolean
}

export const UserDetails = styled.div<UserDetails>`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  overflow: hidden;

  & > div:first-child {
    margin-right: ${theme.spacing(0.5)};
    margin-left: ${({ isCollapsed }) => isCollapsed && theme.spacing(0.5)};
    min-width: 35px;
    transition: margin-left 0.2s;
  }
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${theme.colors.primaryLight};
  margin: ${theme.spacing(0.5)} 0;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(0.5)};
  border-radius: ${theme.borderRadius};
  background: ${theme.colors.primaryLight};
  color: white;
  margin-bottom: ${theme.spacing(0.5)};
  cursor: pointer;
  overflow: hidden;
`

export const IconWrapper = styled.div`
  padding: ${theme.spacing(0.3)};
  margin-right: ${theme.spacing(0.5)};
  background: white;
  border-radius: ${theme.borderRadius};
  ${theme.styles.centerElement}

  svg {
    color: ${theme.colors.primaryLight};
    font-size: ${theme.spacing(1.6)};
  }
`