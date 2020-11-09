import React from 'react'
import { useHistory } from 'react-router-dom'
import { IconWrapper, LinkWrapper } from './Sidebar.styled'

type Props = {
  [x: string]: any
}

const SidebarLink: React.FC<Props> = ({ text, link, icon }) => {
	const history = useHistory()

	return (
		<LinkWrapper onClick={() => history.push(link)} >
			<IconWrapper>{icon}</IconWrapper>
			<div>{text}</div>
		</LinkWrapper>
	)
}

export default SidebarLink
