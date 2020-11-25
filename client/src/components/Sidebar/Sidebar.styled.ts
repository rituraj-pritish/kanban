import { darken, lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

const LINK_BACKGROUND = darken(0.1, theme.colors.primaryLight)

type SidebarWrapper = {
  isCollapsed: boolean
}

export const SidebarWrapper = styled.div<SidebarWrapper>`
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius};
  width: ${({ isCollapsed }) => !isCollapsed ? theme.spacing(14) : theme.spacing(3.15)};
  border: 1px solid ${theme.colors.primaryLight};
  margin-right: ${theme.spacing(0.4)};
  padding: ${theme.spacing(0.5)};
  padding-top: ${theme.spacing(0.15)};
  transition: width 0.2s;
`

type CollapseButtonWrapper = {
  isCollapsed: boolean
}

export const CollapseButtonWrapper = styled.div<CollapseButtonWrapper>`
  position: absolute;
  right: -18px;
  top: 104px;

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
  margin-bottom: -2px;
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
  background: ${lighten(0.15, theme.colors.primary)};
  margin-bottom: ${theme.spacing(0.5)};
  margin-top: ${theme.spacing(0.25)};
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(0.5)};
  border-radius: ${theme.borderRadius};
  background: ${LINK_BACKGROUND};
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
    color: ${LINK_BACKGROUND};
    font-size: ${theme.spacing(1.6)};
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -2px;
  overflow: hidden;

  & > div {
    font-size: ${theme.spacing(1.2)};
    font-weight: 600;
    color: ${theme.colors.primary};
  }

  & > svg {
    cursor: pointer;
    min-width: 50px;
    min-height: 50px;
    transition: margin-left 0.2s;
  }
`