import React from 'react'

import dayjs from 'helpers/dayjs'
import { RootWrapper } from './RightSection.styled'

type Props = {
  created_at: string,
  updated_at: string
}

const RightSection: React.FC<Props> = ({
	created_at,
	updated_at
}) => {
	return (
		<RootWrapper>
      Created {dayjs(created_at).fromNow()}
			<br/>
      Updated {dayjs(updated_at).fromNow()}
		</RootWrapper>
	)
}

export default RightSection
