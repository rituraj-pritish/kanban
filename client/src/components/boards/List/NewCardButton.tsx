import React from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_CARD } from 'graphql/mutations/card'
import { GET_BOARD } from 'graphql/queries/board'
import { StyledNewButton } from './List.styled'

interface Props {
	listId: string,
	boardId: string,
	removeMargin: boolean
}

const NewCardButton: React.FC<Props> = ({ listId, boardId, removeMargin }) => {
	const [createCard, data] = useMutation(CREATE_CARD)

	const handleAddClick = (title: string) => {
		if (!title) return

		createCard({
			variables: {
				title,
				list_id: listId
			},
			refetchQueries: [{
				query: GET_BOARD,
				variables: {
					id: boardId
				}
			}]
		})
	}

	return (
		<StyledNewButton 
			removeMargin={removeMargin} 
			placeholder="Enter title for card" 
			onSubmit={handleAddClick}
		>
      Add new card
		</StyledNewButton>
	)
}

export default NewCardButton
