import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { GET_BOARDS } from 'graphql/queries/board'
import { BoardCard, CardsWrapper } from './Boards.styled'

const Boards = () => {
	const history = useHistory()

	const { data, loading } = useQuery(GET_BOARDS, {
		variables: {
			user_id: '5f4a09093e4e131451870aaf'
		}
	})

	if (loading) return 'loading'

	return (
		<CardsWrapper>
			{data.getBoards.map(({ _id, name }) => 
				<BoardCard key={_id} onClick={() => history.push(`/board/${_id}`)}>
					{name}
				</BoardCard>
			)}
		</CardsWrapper>
	)
}

Boards.propTypes = {}

export default Boards
