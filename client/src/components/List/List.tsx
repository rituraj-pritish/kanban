import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import Card from 'components/Card'
import NewCardButton from './NewCardButton'
import { ListWrapper, ListTitle } from './List.styled'

interface Card {
	_id: string,
	title: string
}

interface Props {
	_id: string,
	cards: Card[],
	title: string,
	index: number,
	setCards: (index: number, card: any ) => void
}

const List: React.FC<Props> = ({ 
	cards, title, _id, index, setCards 
}) => {
	const handleAdd = (text: string) => {
		// todo fix this, should have the id coming from db
		setCards(index, [...cards, { title: text, id: text }])
	}

	return (
		// @ts-expect-error
		<Draggable draggableId={_id} index={index} type={DRAG_DROP_TYPES.LIST}>
			{provided => 
				<div ref={provided.innerRef} {...provided.draggableProps}>
					<ListWrapper>
						<ListTitle {...provided.dragHandleProps}>{title}</ListTitle>
						<Droppable droppableId={_id} type={DRAG_DROP_TYPES.CARD}>
							{provided => 
								<div ref={provided.innerRef} {...provided.droppableProps}>
									{cards.map((card, i) => 
										<Card 
											key={card._id} 
											index={i} 
											{...card} 
										/>
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

export default List
