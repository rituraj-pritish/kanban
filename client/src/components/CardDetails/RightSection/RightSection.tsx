import React from 'react'

import dayjs from 'helpers/dayjs'
import { RootWrapper } from './RightSection.styled'
import Labels from './Labels'

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
			<Labels/>
      Created {dayjs(created_at).fromNow()}
			<br/>
      Updated {dayjs(updated_at).fromNow()}
		</RootWrapper>
	)
}

export default RightSection
