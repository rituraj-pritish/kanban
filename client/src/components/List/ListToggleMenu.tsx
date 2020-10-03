import React from 'react'

import ToggleMenu from 'components/ui/ToggleMenu'
import { useMutation } from '@apollo/client'
import { DELETE_LIST } from 'graphql/mutations/list'
import { GET_BOARD } from 'graphql/queries/board'

interface Props {
  boardId: string,
  listId: string
}

const ListToggleMenu: React.FC<Props> = ({
	boardId,
	listId
}) => {
	const [deleteList, { data, loading }] = useMutation(DELETE_LIST, {
		variables: {
			id: listId,
			board_id: boardId
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
			items={[
				{ text: 'Delete list', onClick: deleteList }
			]}
		/>
	)
}

export default ListToggleMenu
