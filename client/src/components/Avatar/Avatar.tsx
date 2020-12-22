import React from 'react'
import { AdminIcon, AvatarWrapper } from './Avatar.styled'
import { User } from 'types/auth'

interface Props {
  user?: User | null,
  size?: number
}

const Avatar: React.FC<Props> = ({ user, size = 30 }) => {
	if(!user) return null

	const { first_name, last_name, avatar_url, avatar_bg_color, is_admin } = user
  
	const initials = first_name[0] + last_name[0]

	return (
		<AvatarWrapper size={size} bgColor={avatar_bg_color} imageUrl={avatar_url}>
			{!avatar_url && initials}
			{is_admin && <AdminIcon/>}
		</AvatarWrapper>
	)
}

export default Avatar
