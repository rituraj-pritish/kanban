import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { CardWrapper } from './Card.styled'
import { useHistory, useParams } from 'react-router-dom'
import ToggleMenu from 'components/ui/ToggleMenu'
import CardToggleMenu from './CardToggleMenu'
import DRAG_DROP_TYPES from 'constants/dragDropTypes'

interface Props {
	title: string,
	index: number,
	_id: string,
	listId: string
}

interface RouteParams {
	boardId: string
}

const Card: React.FC<Props> = ({ listId, title, index, _id }) => {
	const { boardId } = useParams<RouteParams>()
	const history = useHistory()
	
	const handleCardClick = () =>{
		history.push(`/board/${boardId}?selected=${_id}`)
	}	

	return (
		  // @ts-expect-error 
		<Draggable draggableId={_id} index={index} type={DRAG_DROP_TYPES.CARD}>
			{(provided, snapshot) => 
				<CardWrapper
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					isDragging={snapshot.isDragging}
					onClick={handleCardClick}
				>
					<div>
						{title}
						<CardToggleMenu cardId={_id} listId={listId} />
					</div>
				</CardWrapper>
			}
		</Draggable>
	)
}

export default Card