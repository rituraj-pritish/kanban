import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/ui/Button'
import { useMutation, useQuery } from '@apollo/client'

import { CREATE_BOARD } from 'graphql/mutations/board'
import { GET_BOARDS } from 'graphql/queries/board'

const Dashboard = props => {
	const [text, setText] = useState()
	const [showInput, setShowInput] = useState(true)
	const { data } = useQuery(GET_BOARDS, {
		variables: {
			user_id: '5f4a09093e4e131451870aaf'
		}
	})

	const [createBoard, res] = useMutation(CREATE_BOARD)

	console.log('res', data)

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
					onChange={e => setText(e.target.value)}
				/>
			}
			<Button
				onClick={handleSubmit}
			>Create new board</Button>
		</div>
	)
}

Dashboard.propTypes = {

}

export default Dashboard
