import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import DRAG_DROP_TYPES from 'constants/dragDropTypes'
import Card from 'components/boards/Card'
import NewCardButton from './NewCardButton'
import { ListWrapper, ListDivider, CardsContainer } from './List.styled'
import ListTitle from './ListTitle'
import { Card as CardType } from 'types/card'

interface Props {
	_id: string,
	cards: CardType[],
	title: string,
	index: number,
	board_id: string
}

const List: React.FC<Props> = ({ 
	cards, title, _id, board_id, index
}) => {
	return (
		// @ts-expect-error
		<Draggable draggableId={_id} index={index} type={DRAG_DROP_TYPES.LIST}>
			{provided => 
				<div ref={provided.innerRef} {...provided.draggableProps}>
					<ListWrapper>
						<ListTitle
							totalCards={cards.length}
							listId={_id} 
							boardId={board_id}
							provided={provided}
							title={title}
						/>
						<Droppable droppableId={_id} type={DRAG_DROP_TYPES.CARD}>
							{provided => 
								<CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
									<ListDivider/>
									{cards.map((card, i) => 
										<Card 
											listId={_id}
											key={card._id} 
											index={i} 
											{...card} 
										/>
									)}
									{provided.placeholder}
								</CardsContainer>
							}
						</Droppable>
						<NewCardButton removeMargin={!cards.length} listId={_id} boardId={board_id} />
					</ListWrapper>
				</div>
			}
		</Draggable>
	)
}

export default List
