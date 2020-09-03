import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { CardWrapper } from './Card.styled'

interface Props {
	title: string,
	index: number,
	_id: string
}

const Card: React.FC<Props> = ({ title, index, _id }) => {
	return (
		// @ts-expect-error
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

export default Card
