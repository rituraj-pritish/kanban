import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'

import Avatar from 'components/Avatar'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import AuthContext from 'contexts/auth/AuthContext'
import { DELETE_COMMENT, UPDATE_COMMENT } from 'graphql/mutations/card'
import { GET_CARD } from 'graphql/queries/card'
import dayjs from 'helpers/dayjs'
import { ActionButtons, CommentWrapper } from './CardComments.styled'

type Props = {
  [x: string]: any,
  cardId: string
}

const Comment: React.FC<Props> = ({
	_id,
	comment,
	comment_by,
	date,
	cardId
}) => {
	const { user } = useContext(AuthContext)
	const refetchQuery = {
		refetchQueries: [{
			query: GET_CARD,
			variables: { id: cardId }
		}]
	}
	const [showInput, setShowInput] = useState<boolean>(false)
	const [text, setText] = useState<string>(comment)
	const [updateComment, updateData] = useMutation(UPDATE_COMMENT, refetchQuery)
	const [deleteComment, deleteData] = useMutation(DELETE_COMMENT, refetchQuery)
  
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
			{!showInput && 
			<>
				<Avatar user={user} />
				<CommentWrapper>
					<div>{user?.name}</div>
					comment
					{dayjs(date).fromNow()}
				</CommentWrapper>
			</>
			}
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
