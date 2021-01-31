import React, { useState } from 'react'
import { PureQueryOptions, useMutation } from '@apollo/client'

import { UPDATE_BOARD } from 'graphql/mutations/board'
import Dialog from 'components/ui/Dialog'

type Props = {
  boardId: string,
  boardName: string,
  refetchBoards: PureQueryOptions
}

const RenameBoard: React.FC<Props> = ({
	boardId,
	boardName,
	refetchBoards
}) => {
	const [showDialog, setShowDialog] = useState<boolean>(false)
	const [updateBoard] = useMutation(UPDATE_BOARD)
  
	return (
		<div>
			<div onClick={() => setShowDialog(true)} >Rename Board</div>
			<Dialog
				title='Rename board'
				text='Enter new board name'
				placeholder='New board name'
				value={boardName}
				hasInput
				onClose={() => setShowDialog(false)}
				onConfirm={(text: string | undefined) => updateBoard({
					variables: { id: boardId, name: text },
					refetchQueries: [refetchBoards]
				})}
				isOpen={showDialog}
			/> 
		</div>
	)
}

export default RenameBoard
