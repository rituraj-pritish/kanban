import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import Button from 'components/ui/Button'
import { CREATE_BOARD } from 'graphql/mutations/board'
import Boards from 'components/Boards'
import useAuth from 'hooks/useAuth'
import { GET_BOARDS } from 'graphql/queries/board'

const Dashboard: React.FC = () => {
	const [text, setText] = useState<string>()
	const [showInput, setShowInput] = useState<boolean>(true)
	const { user } = useAuth()
	const [createBoard, res] = useMutation(CREATE_BOARD)

	const handleSubmit = () => {
		createBoard({
			variables: { name: text, user_id: user._id , is_admin: true },
			refetchQueries: [{
				query: GET_BOARDS,
				variables: {
					user_id: user._id
				}
			}]
		})
	}

	return (
		<div>
			{showInput && 
				<input 
					value={text} 
					onChange={(
						e: React.ChangeEvent<HTMLInputElement>): void => 
						setText(e.target.value)} />
			}
			<Button onClick={handleSubmit}>Create new board</Button>
			<Boards />
		</div>
	)
}

export default Dashboard
