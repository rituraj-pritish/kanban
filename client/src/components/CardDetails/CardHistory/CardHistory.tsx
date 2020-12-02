import React, { useContext } from 'react'

import ACTIVITIES from 'constants/activities'
import AuthContext from 'contexts/auth/AuthContext'
import dayjs from 'helpers/dayjs'
import { History } from 'types/card'
import { User } from 'types/auth'
import { HistoryWrapper, RootWrapper, Time } from './CardHistory.styled'
import Avatar from 'components/Avatar'

type Props = {
	history: History[]
}

const getHistory = (item: History, user: User | null) => {
	switch(item.type) {
	case ACTIVITIES.CREATE:
		return `${user?.name} created the card`

	default:
		return null
	}
}

const CardHistory: React.FC<Props> = ({ history }) => {
	const { user } = useContext(AuthContext)

	return (
		<RootWrapper>
			{	history.map(item => {
				return (
					<HistoryWrapper key={item._id}>
						<Avatar user={user} />
						<div>
							<div>{getHistory(item, user)}</div>
							<Time>{dayjs(item.done_on).fromNow()}</Time>
						</div>
					</HistoryWrapper>
				)
			})}
		</RootWrapper>
	)
}

export default CardHistory
