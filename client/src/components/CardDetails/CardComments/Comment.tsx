import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'

import Avatar from 'components/Avatar'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import AuthContext from 'contexts/auth/AuthContext'
import { DELETE_COMMENT, UPDATE_COMMENT } from 'graphql/mutations/card'
import { GET_CARD } from 'graphql/queries/card'
import dayjs from 'helpers/dayjs'
import { ActionButtons, CommentWrapper, Text, TopSection, Wrapper } from './CardComments.styled'

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
			<Wrapper>
				<Avatar user={user} />

				<CommentWrapper>
					<TopSection>
						<span>{user?.name}</span>
						<span>{dayjs(date).fromNow()}</span>
					</TopSection>

					{!showInput && <Text>
						{comment}
					</Text>}

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
				</CommentWrapper>
			</Wrapper>
		</div>
	)
}

export default Comment
