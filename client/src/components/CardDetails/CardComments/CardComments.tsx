import { useMutation } from '@apollo/client'
import React, { useContext, useState } from 'react'

import { ADD_COMMENT } from 'graphql/mutations/card'
import { Comment as CommentType } from 'types/card'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'

import Comment from './Comment'
import { GET_CARD } from 'graphql/queries/card'
import Avatar from 'components/Avatar'
import AuthContext from 'contexts/auth/AuthContext'
import { AddCommentWrapper } from './CardComments.styled'

type Props = {
	comments: CommentType[],
	cardId: string
}

const CardComments: React.FC<Props> = ({ comments, cardId }) => {
	const { user } = useContext(AuthContext)
	const [addComment, data] = useMutation(ADD_COMMENT, {
		refetchQueries: [{
			query: GET_CARD,
			variables: { id: cardId }
		}]
	})
	const [text, setText] = useState<string>('')

	return (
		<div>
			{
				comments && comments.map(comment => 
					<Comment key={comment._id} {...comment} cardId={cardId} />
				)
			}
			<AddCommentWrapper>
				<Avatar user={user} />
				<div>
					<Input 
						value={text} 
						onChange={(
							e: React.ChangeEvent<HTMLTextAreaElement>): void => {
							setText(e.target.value)
						}}
					/>
					<Button
						disabled={!text}
						onClick={() => addComment({
							variables: {
								comment: text,
								card_id: cardId
							}
						})
							.then(() => setText(''))
						}
					>
				Comment
					</Button>		
				</div>
			</AddCommentWrapper>
		</div>
	)
}

export default CardComments
