import React, { useContext } from 'react'
import { useApolloClient } from '@apollo/client'
import { useParams } from 'react-router-dom'

import dayjs from 'helpers/dayjs'
import { GET_BOARD } from 'graphql/queries/board'
import { History } from 'types/card'
import { Board } from 'types/board'
import { User } from 'types/auth'
import ACTIVITIES from 'constants/activities'
import AuthContext from 'contexts/auth/AuthContext'

import { HistoryWrapper, RootWrapper, Time } from './CardHistory.styled'
import Avatar from 'components/Avatar'

type Props = {
	history: History[],
	cardId: string
}

type RouteParams = {
	boardId: string
}

const getHistory = (item: History, board: Board , user: User | null) => {

	switch(item.type) {
	case ACTIVITIES.CREATE:
		return `${user?.name} created the card`

	case ACTIVITIES.MOVE: {
		const from = board.lists.find(({ _id }) => _id === item.from)?.title
		const to = board.lists.find(({ _id }) => _id === item.to)?.title
		return `${user?.name} moved card from ${from} to ${to} `
	}

	default:
		return null
	}
}

const CardHistory: React.FC<Props> = ({ history, cardId }) => {
	const { boardId } = useParams<RouteParams>()
	const { user } = useContext(AuthContext)
	const client = useApolloClient()

	const { getBoard: board } = client.readQuery({
		query: GET_BOARD,
		variables: { id: boardId }
	})

	return (
		<RootWrapper>
			{	history.map(item => {
				return (
					<HistoryWrapper key={item._id}>
						<Avatar user={user} />
						<div>
							<div>{getHistory(item, board, user)}</div>
							<Time>{dayjs(item.done_on).fromNow()}</Time>
						</div>
					</HistoryWrapper>
				)
			})}
		</RootWrapper>
	)
}

export default CardHistory
