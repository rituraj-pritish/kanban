import { useMutation } from '@apollo/client'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { DELETE_COMMENT, UPDATE_COMMENT } from 'graphql/mutations/card'
import React, { useState } from 'react'

import { ActionButtons } from './CardComments.styled'

type Props = {
  [x: string]: any,
  cardId: string
}

const Comment: React.FC<Props> = ({
	_id,
	comment,
	comment_by,
	cardId
}) => {
	const [showInput, setShowInput] = useState<boolean>(false)
	const [text, setText] = useState<string>(comment)
	const [updateComment, updateData] = useMutation(UPDATE_COMMENT)
	const [deleteComment, deleteData] = useMutation(DELETE_COMMENT)
  
	const handleUpdate = () => {
		updateComment({
			variables: {
				card_id: cardId,
				comment_id: _id,
				comment: text
			}
		})
			.then(() => setShowInput(false))
	}

	const handleDelete = () => {
		deleteComment({
			variables: {
				card_id: cardId,
				comment_id: _id
			}
		})
	}
  
	return (
		<div>
			{!showInput && comment}
			{showInput && <Input 
				autoFocus
				value={text} 
				onChange={(
					e: React.ChangeEvent<HTMLTextAreaElement>): void => {
					setText(e.target.value)
				}}
			/>}
			{!showInput && <ActionButtons>
				<div onClick={() => setShowInput(true)} >
        Edit
				</div>
				<div onClick={handleDelete}>
        Delete
				</div>
			</ActionButtons>}
			{showInput && <Button onClick={handleUpdate}>Save</Button>}
		</div>
	)
}

export default Comment
