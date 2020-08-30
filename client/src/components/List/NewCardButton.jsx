import React from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { CREATE_CARD } from 'graphql/mutations/card'
import NewButton from 'components/NewButton'

const NewCardButton = ({ handleAdd, listId }) => {
	const [createCard, data] = useMutation(CREATE_CARD)

	const handleAddClick = (title) => {
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
		<NewButton
			placeholder='Enter title for card'
			onSubmit={handleAddClick}
		>
			Add new card
		</NewButton>
	)
}


NewCardButton.propTypes = {
	handleAdd: PropTypes.func.isRequired
}

export default NewCardButton
