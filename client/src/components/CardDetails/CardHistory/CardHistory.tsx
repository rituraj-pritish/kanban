import React, { useContext } from 'react'

import ACTIVITIES from 'constants/activities'
import AuthContext from 'contexts/auth/AuthContext'
import dayjs from 'helpers/dayjs'
import { History } from 'types/card'
import { User } from 'types/auth'

type Props = {
	history: History[]
}

const getHistory = (item: History, user: User | null) => {
	switch(item.type) {
	case ACTIVITIES.CREATE:
		return (
			`${user?.name} created the card ${dayjs(item.done_on).fromNow()}`
		)

	default:
		return null
	}
}

const CardHistory: React.FC<Props> = ({ history }) => {
	const { user } = useContext(AuthContext)
	return (
		<div>
			{	history.map(item => {
				return <div key={item._id}>{getHistory(item, user)}</div>
			})}
		</div>
	)
}

export default CardHistory
