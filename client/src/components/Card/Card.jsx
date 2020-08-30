import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import { CardWrapper } from './Card.styled'

const Card = ({ title, index, _id }) => {
	return (
		<Draggable draggableId={_id} index={index} type="card">
			{(provided, snapshot) => 
				<CardWrapper
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					isDragging={snapshot.isDragging}
				>
					<div>{title}</div>
				</CardWrapper>
			}
		</Draggable>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired
}

export default Card
