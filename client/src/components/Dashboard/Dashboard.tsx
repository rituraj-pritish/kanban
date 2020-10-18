import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import Button from 'components/ui/Button'
import { CREATE_BOARD } from 'graphql/mutations/board'
import Boards from 'components/Boards'

const Dashboard: React.FC = () => {
	const [text, setText] = useState<string>()
	const [showInput, setShowInput] = useState<boolean>(true)

	const [createBoard, res] = useMutation(CREATE_BOARD)

	const handleSubmit = () => {
		createBoard({
			variables: { name: text, user_id: '5f4a09093e4e131451870aaf' }
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
