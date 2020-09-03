import React from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_CARD } from 'graphql/mutations/card'
import NewButton from 'components/NewButton'

interface Props {
	handleAdd: (title: string) => void,
	listId: string
}

const NewCardButton: React.FC<Props> = ({ handleAdd, listId }) => {
	const [createCard, data] = useMutation(CREATE_CARD)

	const handleAddClick = (title: string) => {
		if (!title) return

		createCard({
			variables: {
				title,
				list_id: listId
			}
		})

		handleAdd(title)
	}

	return (
		<NewButton placeholder="Enter title for card" onSubmit={handleAddClick}>
      Add new card
		</NewButton>
	)
}

export default NewCardButton
