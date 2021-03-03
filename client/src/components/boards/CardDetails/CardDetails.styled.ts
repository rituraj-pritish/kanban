import { darken, lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

export const DetailsWrapper = styled.div`
  display: flex;
  height: 100%;
`

export const SkeletonWrapper = styled(DetailsWrapper)`
  display: flex;
  
  // left section
  & > div:first-child {
    height: min-content;
  }
`

export const Divider = styled.div`
  width: 1px;
  background: ${theme.colors.greyLight};
  margin: 0 ${theme.spacing()};
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
`

export const BottomSectionWrapper = styled.div`
  margin-right: ${theme.spacing(-0.5)};
  height: 50%;
`

export const Tabs = styled.div`
  margin-top: ${theme.spacing()};
  display: flex;
`

type Tab = {
  isActive: boolean
}

export const Tab = styled.div<Tab>`
  cursor: ${({ isActive }) => isActive ? 'default' : 'pointer'};  
  margin-right: ${theme.spacing()};
  border-radius: ${theme.borderRadius};
  background: ${({ isActive }) => !isActive 
		? lighten(0.05, theme.colors.greyLight) : darken(0.1, theme.colors.greyLight)};
  color: ${({ isActive }) => !isActive ? 'grey' : 'white'};
  font-size: ${theme.spacing(0.8)};
  padding: ${theme.spacing(0.3)} ${theme.spacing(0.5)};
`