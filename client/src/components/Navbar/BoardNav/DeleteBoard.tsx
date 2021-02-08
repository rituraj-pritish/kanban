import React, { useContext } from 'react'
import { PureQueryOptions, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { Board } from 'types/board'
import { DELETE_BOARD } from 'graphql/mutations/board'
import Dialog from 'components/ui/Dialog'
import { GET_BOARDS } from 'graphql/queries/board'
import AuthContext from 'contexts/auth/AuthContext'

type Props = {
  boardId: string,
  boardName: string,
	closeDialog: () => void,
	isOpen: boolean
}

const DeleteBoard: React.FC<Props> = ({
	boardId,
	boardName,
	closeDialog,
	isOpen
}) => {
	const { user } = useContext(AuthContext)
	const history = useHistory()
  
	const [deleteBoard] = useMutation(DELETE_BOARD, {
		variables: { id: boardId },
		update: cache => {
			try {
				//@ts-expect-error
				const { getBoards } = cache.readQuery({ query: GET_BOARDS, variables: { user_id: user?._id } })
				cache.writeQuery({
					query: GET_BOARDS,
					variables: {
						user_id: user?._id
					},
					data: {
						getBoards: getBoards.filter((board: Board) => board._id !== boardId)
					}
				})
			} catch (error) {}
		}
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
