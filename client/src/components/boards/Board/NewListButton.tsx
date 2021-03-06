import React from 'react'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { CREATE_LIST } from 'graphql/mutations/list'
import NewButton from 'components/common/NewButton'
import { GET_BOARD } from 'graphql/queries/board'
import { NewButtonWrapper } from './Board.styled'

interface RouteParams {
	boardId: string
}

interface Props {
	setLists: (lists: []) => void
}


const NewListButton: React.FC<Props> = () => {
	const [createList, { data, loading }] = useMutation(CREATE_LIST)

	const { boardId } = useParams<RouteParams>()

	const handleAddClick = (title: string) => {
		if (!title) return

		createList({
			variables: {
				title,
				board_id: boardId
			},
			refetchQueries:[{
				query: GET_BOARD,
				variables: {
					id: boardId
				}
			}]
		})
	}

	return (
		<NewButtonWrapper>
			<NewButton
				havePaddingIfOpen
				onSubmit={handleAddClick}
				placeholder="Enter list name"
			>
      Add new list
			</NewButton>
		</NewButtonWrapper>
	)
}

export default NewListButton
