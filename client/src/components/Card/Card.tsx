import React, { RefObject, useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useHistory, useParams } from 'react-router-dom'

import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import CardToggleMenu from './CardToggleMenu'
import { CardWrapper, StyledLabelRenderer } from './Card.styled'

interface Props {
	title: string,
	index: number,
	_id: string,
	listId: string,
	labels: [string]
}

interface RouteParams {
	boardId: string
}

const Card: React.FC<Props> = ({ listId, title, index, _id, labels }) => {
	const { boardId } = useParams<RouteParams>()
	const history = useHistory()
	const menuRef = useRef<RefObject<HTMLDivElement>>()
	
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
					//@ts-expect-error
					onMouseLeave={() => menuRef.current?.closeMenu()}
				>
					<div>
						<StyledLabelRenderer labels={labels} _id={_id} forCard />
						<div>{title}</div>
						{/* @ts-expect-error */}
						<CardToggleMenu menuRef={menuRef} cardId={_id} listId={listId} />
					</div>
				</CardWrapper>
			}
		</Draggable>
	)
}

export default Card
