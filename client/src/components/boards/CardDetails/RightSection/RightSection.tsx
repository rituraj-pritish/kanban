import React from 'react'

import dayjs from 'helpers/dayjs'
import { Date, RootWrapper } from './RightSection.styled'
import Labels from '../Labels'

type Props = {
  created_at: string,
	updated_at: string,
	labels: string[]
}

const RightSection: React.FC<Props> = ({
	labels,
	created_at,
	updated_at
}) => {
	return (
		<RootWrapper>
			<Labels cardLabels={labels}/>

			<Date>
				<span>
					Created: 
				</span>	
				<span>
					{dayjs(created_at).fromNow()}
				</span>
			</Date>
			<Date>
				<span>
					Updated:
				</span>
				<span>
					{dayjs(updated_at).fromNow()}
				</span>
			</Date>
		</RootWrapper>
	)
}

export default RightSection
