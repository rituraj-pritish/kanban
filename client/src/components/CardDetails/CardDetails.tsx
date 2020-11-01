import React, { useState, useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useLocation, useParams, useHistory } from 'react-router-dom'

import { GET_CARD } from 'graphql/queries/card'
import Modal from 'components/ui/Modal'
import Spinner from 'components/ui/Spinner'
import CardDetailsForm from './CardDetailsForm'
import { UPDATE_CARD } from 'graphql/mutations/card'

interface RouteParams {
	boardId: string
}

const CardDetails: React.FC = () => {
	const { search } = useLocation()
	const history = useHistory()
	const { boardId } = useParams<RouteParams>()
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [updateCard, updateData] = useMutation(UPDATE_CARD)
	
	const params = new URLSearchParams(search)
	const cardId = params.get('selected')

	const [getCard, { loading, called, data }] = useLazyQuery(GET_CARD)
	
	useEffect(() => {
		if(cardId && !loading) getCard({ variables: {
			id: cardId
		} })
	}, [cardId, data])

	useEffect(() => {
		if(cardId && !isOpen) setIsOpen(true)
	},[cardId])

	const onRequestClose = () => {
		history.push(`/board/${boardId}`)
		setIsOpen(false)
	}

	//@ts-expect-error
	const handleSubmit = values => {
		updateCard({ variables: {
			id: cardId,
			title: values.title,
			description: values.description
		} })
	}

	const render = () => {
		if(loading) return <Spinner centerOfParent loading/>
		if(!called) return

		return <CardDetailsForm onSubmit={handleSubmit} initialValues={data.getCard} />
	}

	return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose}
			modalStyles={{
				width: '48rem',
				height: '50rem'
			}}
		>
			{render()}
		</Modal>
	)
}

export default CardDetails
