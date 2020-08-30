import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BsPlus } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

import { ButtonWrapper, StyledInput, RootWrapper, ActionsWrapper } from './Board.styled'
import useKeyPress from 'hooks/useKeyPress'
import KEYS from 'constants/keys'
import Button from 'components/ui/Button'
import IconButton from 'components/ui/IconButton/IconButton'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { CREATE_LIST } from 'graphql/mutations/list'
import NewButton from 'components/NewButton'

const NewListButton = () => {
	const [createList, { data, loading }] = useMutation(CREATE_LIST)

	const { boardId } = useParams()

	const handleAddClick = (title) => {
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
			placeholder='Enter list name'
		>
			Add new list
		</NewButton>
	)
}

NewListButton.propTypes = {

}

export default NewListButton
