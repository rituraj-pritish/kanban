import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { BoardWrapper } from './Board.styled'
import List from 'components/List'
import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import NewListButton from './NewListButton'

const Board = ({ lists, id }) => {
	const [columns, setColumns] = useState(lists)

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result
		if(!destination) return

		if(destination.droppableId === source.droppableId &&
			destination.index === source.index) return

		if(type === DRAG_DROP_TYPES.LIST) {
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
					droppableId={id} 
					direction='horizontal' 
					type={DRAG_DROP_TYPES.LIST}
				>
					{(provided) => (
						<div 
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{columns.map((list, i) => (
								<List key={list.id} index={i} {...list} setCards={setCards} />
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				<NewListButton/>
			</BoardWrapper>
		</DragDropContext>
	)
}

Board.propTypes = {
	lists: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired
}

export default Board
