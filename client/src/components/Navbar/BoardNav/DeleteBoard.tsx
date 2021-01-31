import React, { useState } from 'react'
import { PureQueryOptions, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { DELETE_BOARD } from 'graphql/mutations/board'
import Dialog from 'components/ui/Dialog'

type Props = {
  boardId: string,
  boardName: string,
  refetchBoards: PureQueryOptions
}

const DeleteBoard: React.FC<Props> = ({
	boardId,
	boardName,
	refetchBoards
}) => {
	const history = useHistory()
	const [showDialog, setShowDialog] = useState<boolean>(false)
  
	const [deleteBoard, res] = useMutation(DELETE_BOARD, {
		variables: { id: boardId },
		refetchQueries: [refetchBoards]
	})

	const handleDeleteBoard = () => {
		return deleteBoard()
			.then(() => history.push('/boards'))
	}
  
	return (
		<>
			<div onClick={() => setShowDialog(true)} >Delete Board</div>
			<Dialog
				confirmDeleteWithText
				confirmText={boardName}
				deleteSubject='board'
				title='Delete board'
				text={`Are you sure you want to delete the board <b>${boardName}</b> ?`}
				onClose={() => setShowDialog(false)}
				onConfirm={handleDeleteBoard}
				isOpen={showDialog}
			/> 
		</>
	)
}

export default DeleteBoard
