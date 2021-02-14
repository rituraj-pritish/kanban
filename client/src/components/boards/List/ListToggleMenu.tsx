import React, { useState } from 'react'

import ToggleMenu from 'components/common/ui/ToggleMenu'
import { useMutation } from '@apollo/client'
import { DELETE_LIST } from 'graphql/mutations/list'
import { GET_BOARD } from 'graphql/queries/board'
import Dialog from 'components/common/ui/Dialog'

interface Props {
  boardId: string,
	listId: string,
	listName: string
}

const ListToggleMenu: React.FC<Props> = ({
	boardId,
	listId,
	listName
}) => {
	const [deleteList] = useMutation(DELETE_LIST, {
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

	const [showDialog, setShowDialog] = useState<boolean>(false)
  
	return (
		<>
			<ToggleMenu 
				items={[
					{ text: 'Delete list', onClick: () => setShowDialog(true) }
				]}
			/>
			<Dialog
				isOpen={showDialog}
				onClose={() => setShowDialog(false)}
				title='Delete List'
				text={`Are you sure you want to delete the list <b>${listName}</b> ?`}
				onConfirm={() => deleteList()}
				confirmDelete
			/>
		</>
	)
}

export default ListToggleMenu
