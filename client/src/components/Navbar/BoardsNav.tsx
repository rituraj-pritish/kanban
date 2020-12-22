import React, { useContext, useState } from 'react'

import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from 'graphql/mutations/board'
import { GET_BOARDS } from 'graphql/queries/board'
import Button from 'components/ui/Button'
import { BoardsNavWrapper } from './Navbar.styled'
import AuthContext from 'contexts/auth/AuthContext'
import Dialog from 'components/ui/Dialog'


const BoardsNav: React.FC = () => {
	const { user } = useContext(AuthContext)
  
	const [showDialog, setShowDialog] = useState<boolean>(false)
	const [createBoard] = useMutation(CREATE_BOARD)

	const handleSubmit = (name: string | undefined) => {
		return createBoard({
			variables: { name: name, user_id: user?._id , is_admin: true },
			refetchQueries: [{
				query: GET_BOARDS,
				variables: {
					user_id: user?._id
				}
			}]
		})
	}
  
	return (
		<BoardsNavWrapper>
			<div>
				Boards

				<Button onClick={() => setShowDialog(true)}>
        New Board
				</Button>
			</div>

			<Dialog
				title='Add board'
				text='Type name of the board'
				hasInput
				isOpen={showDialog}
				onClose={() => setShowDialog(false)}
				onConfirm={handleSubmit}
			/>
		</BoardsNavWrapper>
	)
}

export default BoardsNav
