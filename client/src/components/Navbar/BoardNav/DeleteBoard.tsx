import React, { useState } from 'react'
import { PureQueryOptions, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { DELETE_BOARD } from 'graphql/mutations/board'
import Dialog from 'components/ui/Dialog'

type Props = {
  boardId: string,
  boardName: string,
	refetchBoards: PureQueryOptions,
	closeDialog: () => void,
	isOpen: boolean
}

const DeleteBoard: React.FC<Props> = ({
	boardId,
	boardName,
	refetchBoards,
	closeDialog,
	isOpen
}) => {
	const history = useHistory()
  
	const [deleteBoard, res] = useMutation(DELETE_BOARD, {
		variables: { id: boardId },
		refetchQueries: [refetchBoards]
	})

	const handleDeleteBoard = () => {
		return deleteBoard()
			.then(() => history.push('/boards'))
	}

	return (
		<Dialog
			confirmDeleteWithText
			confirmText={boardName}
			deleteSubject='board'
			title='Delete board'
			text={`Are you sure you want to delete the board <b>${boardName}</b> ?`}
			onClose={closeDialog}
			onConfirm={handleDeleteBoard}
			isOpen={isOpen}
		/> 

	)
}

export default DeleteBoard
