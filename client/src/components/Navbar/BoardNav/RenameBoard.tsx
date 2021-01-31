import React, { useState } from 'react'
import { PureQueryOptions, useMutation } from '@apollo/client'

import { UPDATE_BOARD } from 'graphql/mutations/board'
import Dialog from 'components/ui/Dialog'

type Props = {
  boardId: string,
  boardName: string,
	refetchBoards: PureQueryOptions,
	closeDialog: () => void,
	isOpen: boolean
}

const RenameBoard: React.FC<Props> = ({
	boardId,
	boardName,
	refetchBoards,
	closeDialog,
	isOpen
}) => {
	const [updateBoard] = useMutation(UPDATE_BOARD)
  
	return (
		<Dialog
			title='Rename board'
			text='Enter new board name'
			placeholder='New board name'
			value={boardName}
			hasInput
			onClose={closeDialog}
			onConfirm={(text: string | undefined) => updateBoard({
				variables: { id: boardId, name: text },
				refetchQueries: [refetchBoards]
			})}
			isOpen={isOpen}
		/> 
	)
}

export default RenameBoard
