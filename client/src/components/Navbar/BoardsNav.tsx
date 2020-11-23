import React, { useContext, useState } from 'react'

import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from 'graphql/mutations/board'
import { GET_BOARDS } from 'graphql/queries/board'
import Button from 'components/ui/Button'
import Modal from 'components/ui/Modal'
import { BoardsNavWrapper } from './Navbar.styled'
import AuthContext from 'contexts/auth/AuthContext'


const BoardsNav: React.FC = () => {
	const { user } = useContext(AuthContext)
  
	const [showModal, setShowModal] = useState<boolean>(false)
	const [text, setText] = useState<string>('')
	const [createBoard, res] = useMutation(CREATE_BOARD)

	const handleSubmit = () => {
		if(!text) return
		createBoard({
			variables: { name: text, user_id: user?._id , is_admin: true },
			refetchQueries: [{
				query: GET_BOARDS,
				variables: {
					user_id: user?._id
				}
			}]
		})
			.then(() => setShowModal(false))
	}
  
	return (
		<BoardsNavWrapper>
			<div>
				Boards

				<Button onClick={() => setShowModal(true)}>
        New Board
				</Button>
			</div>

			<Modal
				isOpen={showModal}
				onRequestClose={() => setShowModal(false)}
				modalStyles={{
					width: '25rem',
					height: '20rem'
				}}
			>
				<input 
					value={text} 
					onChange={(
						e: React.ChangeEvent<HTMLInputElement>): void => 
						setText(e.target.value)} />
				<Button onClick={handleSubmit}>Create new board</Button>        
			</Modal>
		</BoardsNavWrapper>
	)
}

export default BoardsNav
