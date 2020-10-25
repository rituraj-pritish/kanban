import styled from 'styled-components'
import { IoMdSettings } from 'react-icons/io'
import theme from 'theme'

interface AvatarWrapper {
  size: number,
  bgColor: string,
  imageUrl?: string
}

export const AvatarWrapper = styled.div<AvatarWrapper>`
  position: relative;
  border-radius: 50%;
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  background: ${({ bgColor }) => bgColor};
  background-image: ${({ imageUrl }) => imageUrl && `url(${imageUrl})`};
  background-size: cover;
  ${theme.styles.centerElement}
  font-size: ${theme.spacing(0.9)};
  cursor: pointer;
  color: white;
`

export const AdminIcon = styled(IoMdSettings)`
  position: absolute;
  fill: ${theme.colors.primary};
  right: -3px;
  bottom: -2px;
`