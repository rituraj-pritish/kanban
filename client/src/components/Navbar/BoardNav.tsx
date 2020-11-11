import React from 'react'
import { useQuery } from '@apollo/client'
import { useHistory, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { GET_BOARD } from 'graphql/queries/board'
import IconButton from 'components/ui/IconButton'

type RouteParams = {
  boardId: string
}

const BoardNav: React.FC = () => {
	const history = useHistory()
	const { boardId } = useParams<RouteParams>()

	const { data, loading } = useQuery(GET_BOARD, {
		variables: { id: boardId }
	})
  

	return (
		<div>
			<IconButton 
				icon={<IoMdArrowRoundBack size={25} />}
				onClick={() => history.push('/boards')}
			/>
			{data?.getBoard?.name}
		</div>
	)
}

export default BoardNav
