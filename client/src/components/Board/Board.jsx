import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { BoardWrapper } from './Board.styled'
import List from 'components/List'
import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import NewListButton from './NewListButton'
import { useQuery } from '@apollo/client'
import { GET_BOARD } from 'graphql/queries/board'
import { useParams } from 'react-router-dom'

const Board = () => {
	const { boardId } = useParams()
	const [columns, setColumns] = useState(null)

	const { data, loading } = useQuery(GET_BOARD, {
		variables: { id: boardId }
	})

	useEffect(() => {
		if (!loading && data.getBoard) {
			setColumns(data.getBoard.lists)
		}
	}, [loading, data])
	console.log('da', data)
	if (loading) return 'loading'

	const { lists } = data.getBoard

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result
		if (!destination) return

		if (destination.droppableId === source.droppableId &&
			destination.index === source.index) return

		if (type === DRAG_DROP_TYPES.LIST) {
			const items = columns
			const item = items.find(({ id }) => id === draggableId)
			const newItems = [...items]
			newItems.splice(source.index, 1)
			newItems.splice(destination.index, 0, item)
			setColumns(newItems)
			return
		} else {
			const sourceList = columns.find(({ id }) => id === source.droppableId).cards
			const destinationList = columns.find(({ id }) => id === destination.droppableId).cards
			const item = sourceList.find(({ id }) => id === draggableId)

			const sourceListIdx = sourceList.findIndex(({ id }) => id === source.droppableId)
			const destinationListIdx = destinationList.findIndex(({ id }) => id === destination.droppableId)

			sourceList.splice(source.index, 1)
			destinationList.splice(destination.index, 0, item)

			const newColumns = [...columns]
			newColumns[sourceListIdx] = sourceList
			newColumns[destinationListIdx] = destinationList
			setColumns(newColumns)
		}
	}

	const setCards = (index, cards) => {
		const newColumns = [...columns]
		newColumns[index].cards = cards
		setColumns(newColumns)
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<BoardWrapper>
				<Droppable
					droppableId={boardId}
					direction='horizontal'
					type={DRAG_DROP_TYPES.LIST}
				>
					{(provided) => (
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{columns && columns.map((list, i) => (
								<List key={list._id} index={i} {...list} setCards={setCards} />
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				<NewListButton />
			</BoardWrapper>
		</DragDropContext>
	)
}

export default Board
