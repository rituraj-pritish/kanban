import { useMutation } from '@apollo/client'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { ADD_COMMENT } from 'graphql/mutations/card'
import React, { useState } from 'react'

type Props = {
	comments: Comment[],
	cardId: string
}

const CardComments: React.FC<Props> = ({ comments, cardId }) => {
	const [addComment, data] = useMutation(ADD_COMMENT)
	const [text, setText] = useState<string>('')

	return (
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
				})}
			>
				Comment
			</Button>		
		</div>
	)
}

export default CardComments
