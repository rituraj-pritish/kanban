import IconButton from 'components/common/ui/IconButton'
import { darken } from 'polished'
import styled, { CSSObject } from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  position: relative;
`

export const Label = styled.div`
  background: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.4)} ${theme.spacing(0.5)};
  cursor: pointer;
  display: flex;

  // icon
  & > div:first-child {
    margin-top: ${theme.spacing(0.35)};
    margin-right: ${theme.spacing(0.4)};
  }

  & > div {
    margin-top: ${theme.spacing(0.2)};
  }

  &:hover {
    background: ${darken(0.02, theme.colors.primaryLight)};
  }
`

type Content = {
  contentStyles: CSSObject | undefined
}

export const Content = styled.div<Content>`
  background: white;
  position: absolute;
  padding: ${theme.spacing(0.5)};
  border-radius: ${theme.borderRadius};
  border: 1px solid lightgray;
  width: -webkit-fill-available;
  top: ${theme.spacing(2.5)};
  ${({ contentStyles }) => contentStyles && contentStyles};
`

export const Title = styled.div`
  position: relative;
  text-align: center;
  color: ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.primary};
  margin-bottom: ${theme.spacing(0.7)};
  padding-bottom: ${theme.spacing(0.5)};
`

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: -4px;
  left: 0;
`