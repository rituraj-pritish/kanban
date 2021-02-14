import React from 'react'
import { AdminIcon, AvatarWrapper } from './Avatar.styled'
import { User } from 'types/auth'
import { getColorsAccordingToString } from 'helpers/userHelpers'

interface Props {
  user?: User | null,
  size?: number
}

const Avatar: React.FC<Props> = ({ user, size = 30 }) => {
	if(!user) return null

	const { first_name, last_name, avatar_url, is_admin } = user
  
	const initials = first_name[0] + last_name[0]
	const { bgColor, textColor } = getColorsAccordingToString(initials)

	return (
		<AvatarWrapper size={size} bgColor={bgColor} textColor={textColor} imageUrl={avatar_url}>
			{!avatar_url && initials}
			{is_admin && <AdminIcon/>}
		</AvatarWrapper>
	)
}

export default Avatar
