import React from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_CARD } from 'graphql/mutations/card'
import NewButton from 'components/NewButton'
import { GET_BOARD } from 'graphql/queries/board'

interface Props {
	listId: string,
	boardId: string
}

const NewCardButton: React.FC<Props> = ({ listId, boardId }) => {
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
		<NewButton placeholder="Enter title for card" onSubmit={handleAddClick}>
      Add new card
		</NewButton>
	)
}

export default NewCardButton
