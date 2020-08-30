import React from 'react'
import PropTypes from 'prop-types'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import Card from 'components/Card'
import NewCardButton from './NewCardButton'
import { ListWrapper, ListTitle } from './List.styled'

const List = ({ cards, title, _id, index, setCards }) => {
	const handleAdd = text => {
		setCards(index, [...cards, { title: text, id: text }])
	}

	return (
		<Draggable draggableId={_id} index={index} type={DRAG_DROP_TYPES.LIST}>
			{provided => 
				<div ref={provided.innerRef} {...provided.draggableProps}>
					<ListWrapper>
						<ListTitle {...provided.dragHandleProps}>{title}</ListTitle>
						<Droppable droppableId={_id} type={DRAG_DROP_TYPES.CARD}>
							{provided => 
								<div ref={provided.innerRef} {...provided.droppableProps}>
									{cards.map((card, i) => 
										<Card key={card._id} index={i} {...card} />
									)}
									{provided.placeholder}
								</div>
							}
						</Droppable>
						<NewCardButton handleAdd={handleAdd} listId={_id} />
					</ListWrapper>
				</div>
			}
		</Draggable>
	)
}

List.propTypes = {
	title: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired
		})
	).isRequired,
	index: PropTypes.number.isRequired,
	setCards: PropTypes.func.isRequired
}

export default List
