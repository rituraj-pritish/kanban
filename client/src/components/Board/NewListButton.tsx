import React from 'react'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { CREATE_LIST } from 'graphql/mutations/list'
import NewButton from 'components/NewButton'

interface RouteParams {
	boardId: string
}


const NewListButton: React.FC = () => {
	const [createList, { data, loading }] = useMutation(CREATE_LIST)

	const { boardId } = useParams<RouteParams>()

	const handleAddClick = (title: string) => {
		if (!title) return

		createList({
			variables: {
				title,
				board_id: boardId
			}
		})
	}

	return (
		<NewButton
			havePaddingIfOpen
			onSubmit={handleAddClick}
			placeholder="Enter list name"
		>
      Add new list
		</NewButton>
	)
}

export default NewListButton
