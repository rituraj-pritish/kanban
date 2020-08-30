import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'

import Button from 'components/ui/Button'
import { CREATE_BOARD } from 'graphql/mutations/board'
import Boards from 'components/Boards'

const Dashboard = () => {
	const [text, setText] = useState()
	const [showInput, setShowInput] = useState(true)

	const [createBoard, res] = useMutation(CREATE_BOARD)

	const handleSubmit = () => {
		createBoard({
			variables: { name: text, user_id: '5f4a09093e4e131451870aaf' }
		})
	}

	return (
		<div>
			{showInput && 
        <input value={text} onChange={e => setText(e.target.value)} />
			}
			<Button onClick={handleSubmit}>Create new board</Button>
			<Boards />
		</div>
	)
}

Dashboard.propTypes = {}

export default Dashboard
