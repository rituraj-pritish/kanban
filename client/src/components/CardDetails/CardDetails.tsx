import React, { useState, useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useLocation, useParams, useHistory } from 'react-router-dom'
import dayjs from 'helpers/dayjs'

import { GET_CARD } from 'graphql/queries/card'
import Modal from 'components/ui/Modal'
import CardDetailsForm from './CardDetailsForm'
import { UPDATE_CARD } from 'graphql/mutations/card'
import { DetailsWrapper, Divider, LeftSection, RightSection } from './CardDetails.styled'
import CardDetailsSkeleton from './CardDetailsSkeleton'
import CardDetailsBottomSection from './CardDetailsBottomSection'

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

	const handleSubmit = (values: {
		title: string,
		description: string
	}, { getState }: {getState: () => { pristine: boolean }}) => {
		const formState = getState()

		if(formState.pristine) return
		
		updateCard({ variables: {
			id: cardId,
			title: values.title,
			description: values.description
		}, refetchQueries: [{
			query: GET_CARD,
			variables: { id: cardId }
		}] })
	}

	const render = () => {
		if(!called) return
		if(loading) return <CardDetailsSkeleton/>

		const { created_at, updated_at, comments, history, _id } = data.getCard

		return (
			<DetailsWrapper>
				<LeftSection>
					<CardDetailsForm 
						onSubmit={handleSubmit} 
						initialValues={data.getCard}
					/>
				
					<CardDetailsBottomSection 
						comments={comments} 
						history={history} 
						cardId={_id}
					/>
				</LeftSection>

				<Divider/>

				<RightSection>
					Created {dayjs(created_at).fromNow()}
					<br/>
					Updated {dayjs(updated_at).fromNow()}
				</RightSection>
			</DetailsWrapper>
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
