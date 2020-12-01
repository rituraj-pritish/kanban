import React from 'react'
import { AdminIcon, AvatarWrapper } from './Avatar.styled'

interface Props {
  user?: {
    first_name: string,
    last_name: string,
    avatar_url?: string,
    avatar_bg_color: string,
    is_admin: boolean
  } | null,
  size?: number
}

const Avatar: React.FC<Props> = ({ user, size = 30 }) => {
	//@ts-expect-error
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
