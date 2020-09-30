import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { CardWrapper } from './Card.styled'
import { useHistory, useParams } from 'react-router-dom'
import ToggleMenu from 'components/ui/ToggleMenu'

interface Props {
	title: string,
	index: number,
	_id: string
}

interface RouteParams {
	boardId: string
}

const Card: React.FC<Props> = ({ title, index, _id }) => {
	const { boardId } = useParams<RouteParams>()
	const history = useHistory()
	
	const handleCardClick = () =>{
		history.push(`/board/${boardId}?selected=${_id}`)
	}	

	return (
		  // @ts-expect-error 
		<Draggable draggableId={_id} index={index} type="card">
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
						<ToggleMenu
							items={[
								{ text: 'Copy link', onClick: () => console.log('link') }
							]}
						/>
					</div>
				</CardWrapper>
			}
		</Draggable>
	)
}

export default Card
