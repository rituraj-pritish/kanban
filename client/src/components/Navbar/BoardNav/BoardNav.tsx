import React from 'react'
import { useQuery } from '@apollo/client'
import { useHistory, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Skeleton from 'react-loading-skeleton'

import { GET_BOARD } from 'graphql/queries/board'
import IconButton from 'components/ui/IconButton'

import { BoardNavWrapper } from '../Navbar.styled'
import BoardNavToggleMenu from './BoardNavToggleMenu'

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
		<BoardNavWrapper>
			<div>
				<IconButton 
					icon={<IoMdArrowRoundBack size={25} />}
					onClick={() => history.push('/boards')}
				/>
				{data?.getBoard?.name || <Skeleton width={100} height={22}/>}
			</div>

			<BoardNavToggleMenu/>
		</BoardNavWrapper>
	)
}

export default BoardNav
