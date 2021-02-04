import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_BOARD } from 'graphql/mutations/board'
import Button from 'components/ui/Button'
import { BoardsNavWrapper } from './Navbar.styled'
import AuthContext from 'contexts/auth/AuthContext'
import Dialog from 'components/ui/Dialog'


const BoardsNav: React.FC = () => {
	const { user } = useContext(AuthContext)
  
	const [showDialog, setShowDialog] = useState<boolean>(false)
	const [createBoard, { data }] = useMutation(CREATE_BOARD)



	const handleSubmit = (name: string | undefined) => {
		return createBoard({
			variables: { name: name, user_id: user?._id , is_admin: true }
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
				placeholder='Enter name of the board'
				isOpen={showDialog}
				onClose={() => setShowDialog(false)}
				onConfirm={handleSubmit}
			/>
		</BoardsNavWrapper>
	)
}

export default BoardsNav
