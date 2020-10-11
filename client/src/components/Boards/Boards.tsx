import React from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { GET_BOARDS } from 'graphql/queries/board'
import { BoardCard, CardsWrapper } from './Boards.styled'

const Boards: React.FC = () => {
	const history = useHistory()

	const { data, loading } = useQuery(GET_BOARDS, {
		variables: {
			user_id: '5f4a09093e4e131451870aaf'
		}
	})

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
