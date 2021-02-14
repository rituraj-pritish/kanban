import React, { RefObject } from 'react'

import ToggleMenu from 'components/common/ui/ToggleMenu'
import { useMutation } from '@apollo/client'
import { DELETE_CARD } from 'graphql/mutations/card'
import { useParams } from 'react-router-dom'
import { GET_BOARD } from 'graphql/queries/board'
import { ToggleMenuWrapper } from './Card.styled'

interface Props {
  listId: string,
	cardId: string,
	menuRef: RefObject<HTMLDivElement>
}

interface RouteParams {
  boardId: string
}

const CardToggleMenu: React.FC<Props> = ({ cardId, listId, menuRef }) => {
	const { boardId } = useParams<RouteParams>()

	const [deleteCard] = useMutation(DELETE_CARD, {
		variables: {
			id: cardId,
			list_id: listId
		},
		refetchQueries: [{
			query: GET_BOARD,
			variables: {
				id: boardId
			}
		}]  
	})
  
	return (
		<ToggleMenuWrapper>
			<ToggleMenu
				ref={menuRef}
				items={[
					{ text: 'Copy link', 
					//todo change with BASE_URL
						onClick: () => navigator.clipboard
							.writeText(`http://localhost:3000/board/${boardId}?selected=${cardId}`) 
					},
					{ text: 'Delete Card', onClick: deleteCard }
				]}
			/>
		</ToggleMenuWrapper>
	)
}

export default CardToggleMenu