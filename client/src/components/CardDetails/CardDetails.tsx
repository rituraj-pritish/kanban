import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useLocation, useParams, useHistory } from 'react-router-dom'

import { GET_CARD } from 'graphql/queries/card'
import Modal from 'components/ui/Modal'
import Spinner from 'components/ui/Spinner'

interface RouteParams {
	boardId: string
}

const CardDetails: React.FC = () => {
	const { search } = useLocation()
	const history = useHistory()
	const { boardId } = useParams<RouteParams>()
	const [isOpen, setIsOpen] = useState<boolean>(false)
	
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

	const render = () => {
		if(loading) return <Spinner centerOfParent loading/>
		if(!called) return

		const { title } = data.getCard

		return (
			<div>{title}</div>
		)
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
