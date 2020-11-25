import React, { MutableRefObject } from 'react'

import ToggleMenu from 'components/ui/ToggleMenu'
import { useMutation } from '@apollo/client'
import { DELETE_CARD } from 'graphql/mutations/card'
import { useParams } from 'react-router-dom'
import { GET_BOARD } from 'graphql/queries/board'

interface Props {
  listId: string,
	cardId: string,
	menuRef: React.RefObject<HTMLDivElement>
}

interface RouteParams {
  boardId: string
}

const CardToggleMenu: React.FC<Props> = ({ cardId, listId, menuRef }) => {
	const { boardId } = useParams<RouteParams>()

	const [deleteCard, { data, loading }] = useMutation(DELETE_CARD, {
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
		<ToggleMenu
			ref={menuRef}
			usePosition
			items={[
				{ text: 'Copy link', 
					//todo change with BASE_URL
					onClick: () => navigator.clipboard
						.writeText(`http://localhost:3000/board/${boardId}?selected=${cardId}`) 
				},
				{ text: 'Delete Card', onClick: deleteCard }
			]}
		/>
	)
}

export default CardToggleMenu
