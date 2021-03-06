import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useQuery, useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { UPDATE_CARD_INDEX } from 'graphql/mutations/card'
import { UPDATE_LIST_INDEX } from 'graphql/mutations/list'
import { GET_BOARD } from 'graphql/queries/board'
import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import List from 'components/boards/List'
import NewListButton from './NewListButton'
import { BoardWrapper } from './Board.styled'
import onDragEnd from 'helpers/onDragEnd'
import CardDetails from 'components/boards/CardDetails'
import Skeleton from 'react-loading-skeleton'
import { List as ListType } from 'types/board'

interface RouteParams {
	boardId: string
}

const Board: React.FC = () => {
	const { boardId } = useParams<RouteParams>()
	const [columns, setColumns] = useState<ListType[] | null>(null)
	const [updateCardIndex] = useMutation(UPDATE_CARD_INDEX)
	const [updateListIndex] = useMutation(UPDATE_LIST_INDEX)

	const { data, loading } = useQuery(GET_BOARD, {
		variables: { id: boardId }
	})

	useEffect(() => {
		if (!loading && data.getBoard) {
			setColumns([...data.getBoard.lists])
		}
	}, [loading, data])

	if (loading) return (
		<>
			<Skeleton height={500} width={288} style={{ marginRight: '1rem' }}/>
			<Skeleton height={350} width={288} style={{ marginRight: '1rem' }}/>
			<Skeleton height={200} width={288}/>
		</>
	)

	const handleDragEnd = (result: any) => {
		onDragEnd(
			result, 
			columns, 
			setColumns, 
			updateListIndex, 
			updateCardIndex, 
			boardId
		)
	}

	return (
		<>
			<DragDropContext onDragEnd={handleDragEnd}>
				<BoardWrapper>
					<Droppable
						droppableId={boardId}
						direction="horizontal"
						type={DRAG_DROP_TYPES.LIST}
					>
						{provided => 
							<div ref={provided.innerRef} {...provided.droppableProps}>
								{columns &&
                columns.map((list, i) => 
                	<List
                		key={list._id}
                		index={i}
                		{...list}
                	/>
                )}
								{provided.placeholder}
							</div>
						}
					</Droppable>
					<NewListButton setLists={setColumns} />
				</BoardWrapper>
			</DragDropContext>
			<CardDetails/>
		</>
	)
}

export default Board
