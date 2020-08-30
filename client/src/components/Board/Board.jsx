import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { BoardWrapper } from './Board.styled'
import List from 'components/List'
import DRAG_DROP_TYPES from 'constants/dragDropTypes'

import { useQuery, useMutation } from '@apollo/client'
import { GET_BOARD } from 'graphql/queries/board'
import { useParams } from 'react-router-dom'
import { UPDATE_CARD_INDEX } from 'graphql/mutations/card'
import { UPDATE_LIST_INDEX } from 'graphql/mutations/list'
import NewListButton from './NewListButton'

const Board = () => {
	const { boardId } = useParams()
	const [columns, setColumns] = useState(null)
	const [updateCardIndex, d] = useMutation(UPDATE_CARD_INDEX)
	const [updateListIndex, a] = useMutation(UPDATE_LIST_INDEX)

	const { data, loading } = useQuery(GET_BOARD, {
		variables: { id: boardId }
	})

	useEffect(() => {
		if (!loading && data.getBoard) {
			setColumns([...data.getBoard.lists])
		}
	}, [loading, data])

	if (loading) return 'loading'

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result
		if (!destination) return

		if (destination.droppableId === source.droppableId &&
			destination.index === source.index) return

		if (type === DRAG_DROP_TYPES.LIST) {
			updateListIndex({
				variables: {
					old_index: source.index,
					new_index: destination.index,
					list_id: draggableId,
					board_id: boardId
				}
			})

			const items = [...columns]
			const item = items.find(({ _id }) => _id === draggableId)
			const newItems = [...items]
			newItems.splice(source.index, 1)
			newItems.splice(destination.index, 0, item)
			setColumns(newItems)
			return
		} else {
			updateCardIndex({
				variables: {
					old_index: source.index,
					new_index: destination.index,
					card_id: draggableId,
					old_list: source.droppableId,
					new_list: destination.droppableId
				}
			})

			const sourceList = columns.find(({ _id }) => _id === source.droppableId)
			const destinationList = columns.find(({ _id }) => _id === destination.droppableId)
			const item = sourceList.cards.find(({ _id }) => _id === draggableId)

			const sourceListIdx = columns.findIndex(({ _id }) => _id === source.droppableId)
			const destinationListIdx = columns.findIndex(({ _id }) => _id === destination.droppableId)

			const newSourceListCards = [...sourceList.cards]
			const newDestinationListCards = [...destinationList.cards]

			const newColumns = [...columns]

			if (source.droppableId === destination.droppableId) {
				newSourceListCards.splice(source.index, 1)
				newSourceListCards.splice(destination.index, 0, item)

				newColumns[sourceListIdx] = {
					...sourceList,
					cards: newSourceListCards
				}
			} else {
				newSourceListCards.splice(source.index, 1)
				newDestinationListCards.splice(destination.index, 0, item)

				newColumns[sourceListIdx] = { ...sourceList, cards: newSourceListCards }
				newColumns[destinationListIdx] = {
					...destinationList, cards: newDestinationListCards
				}
			}
			setColumns(newColumns)
		}
	}

	const setCards = (index, cards) => {
		const newColumns = [...columns]
		newColumns[index] = {
			...newColumns[index],
			cards
		}
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
