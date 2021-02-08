import React, { useContext } from 'react'
import { ApolloCache, useMutation } from '@apollo/client'

import { Board } from 'types/board'
import { UPDATE_BOARD } from 'graphql/mutations/board'
import Dialog from 'components/ui/Dialog'
import { GET_BOARDS } from 'graphql/queries/board'
import AuthContext from 'contexts/auth/AuthContext'

type Props = {
  boardId: string,
  boardName: string,
	closeDialog: () => void,
	isOpen: boolean
}

const RenameBoard: React.FC<Props> = ({
	boardId,
	boardName,
	closeDialog,
	isOpen
}) => {
	const [updateBoard] = useMutation(UPDATE_BOARD)
	const { user } = useContext(AuthContext)

	const updateCache = (cache: ApolloCache<unknown>, name: string | undefined) => {
		try {
			// @ts-expect-error
			const { getBoards } = cache.readQuery({
				query: GET_BOARDS,
				variables: {
					user_id: user?._id
				}
			})

			const idx = getBoards.findIndex(({ _id }: Board) => _id === boardId)
			getBoards[idx] = {
				...getBoards[idx],
				name
			}

			cache.writeQuery({
				query: GET_BOARDS,
				variables: {
					user_id: user?._id
				},
				data: {
					getBoards
				}
			})
		} catch (err) {}
	}

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
				update: (cache: ApolloCache<unknown>) => updateCache(cache, text)
			})}
			isOpen={isOpen}
		/> 
	)
}

export default RenameBoard
