import React from 'react'
import PropTypes from 'prop-types'

import { CardWrapper } from './Card.styled'
import { Draggable } from 'react-beautiful-dnd'

const Card = ({ title, index, id }) => {
	return (
		<Draggable 
			draggableId={id} 
			index={index} 
			type='card'
		>
			{(provided, snapshot) => (
				<CardWrapper
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					isDragging={snapshot.isDragging}
				>
					<div>
						{title}
					</div>
				</CardWrapper>
			)}
		</Draggable>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired
}

export default Card
