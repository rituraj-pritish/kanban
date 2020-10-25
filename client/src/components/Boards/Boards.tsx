import React, { useEffect } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { GET_BOARDS } from 'graphql/queries/board'
import { BoardCard, CardsWrapper } from './Boards.styled'
import useAuth from 'hooks/useAuth'

const Boards: React.FC = () => {
	const history = useHistory()
	const { user } = useAuth()

	const [getBoards, { data, loading }] = useLazyQuery(GET_BOARDS)

	useEffect(() => {
		if(user?._id) {
			getBoards({ variables: {
				user_id: user._id
			} })
		}
	}, [user])

	if (loading) return <div>loading</div>

	return (
		<CardsWrapper>
			{data?.getBoards.map(
				({ _id, name }: {_id: string, name: string}) => 
					<BoardCard key={_id} onClick={() => history.push(`/board/${_id}`)}>
						{name}
					</BoardCard>
			)}
		</CardsWrapper>
	)
}

export default Boards
