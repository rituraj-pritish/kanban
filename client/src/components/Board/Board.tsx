import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useQuery, useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { UPDATE_CARD_INDEX } from 'graphql/mutations/card'
import { UPDATE_LIST_INDEX } from 'graphql/mutations/list'
import { GET_BOARD } from 'graphql/queries/board'
import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import List from 'components/List'
import NewListButton from './NewListButton'
import { BoardWrapper } from './Board.styled'
import Navbar from 'components/Navbar'
import onDragEnd from 'helpers/onDragEnd'
import CardDetails from 'components/CardDetails'

interface Card {
	_id: string,
	title: string
}

interface ListInterface {
	_id: string,
	board_id: string,
	title: string,
	cards: Card[]
}

interface RouteParams {
	boardId: string
}

const Board: React.FC = () => {
	const { boardId } = useParams<RouteParams>()
	const [columns, setColumns] = useState<ListInterface[] | null>(null)
	const [updateCardIndex, updateCardData] = useMutation(UPDATE_CARD_INDEX)
	const [updateListIndex, updateListData] = useMutation(UPDATE_LIST_INDEX)

	const { data, loading } = useQuery(GET_BOARD, {
		variables: { id: boardId }
	})

	useEffect(() => {
		if (!loading && data.getBoard) {
			setColumns([...data.getBoard.lists])
		}
	}, [loading, data])

	if (loading) return <div>loading</div>

	const setCards = (index: number, cards: []) => {
		const newColumns = columns ? [...columns] : []
		newColumns[index] = {
			...newColumns[index],
			cards
		}
		setColumns(newColumns)
	}

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
			<Navbar/>
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
                		setCards={setCards}
                		setLists={setColumns}
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
