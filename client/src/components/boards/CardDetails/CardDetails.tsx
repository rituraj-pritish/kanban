import React, { useState, useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useLocation, useParams, useHistory } from 'react-router-dom'

import { GET_CARD } from 'graphql/queries/card'
import Modal from 'components/common/ui/Modal'
import CardDetailsForm from './CardDetailsForm'
import { UPDATE_CARD } from 'graphql/mutations/card'
import { DetailsWrapper, Divider, LeftSection } from './CardDetails.styled'
import CardDetailsSkeleton from './CardDetailsSkeleton'
import CardDetailsBottomSection from './CardDetailsBottomSection'
import RightSection from './RightSection'
import LabelRenderer from './Labels/LabelRenderer'

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

		const { comments, history, _id } = data.getCard

		return (
			<DetailsWrapper>
				<LeftSection>
					<div>
						<LabelRenderer {...data.getCard} />
						<CardDetailsForm 
							onSubmit={handleSubmit} 
							initialValues={data.getCard}
						/>
					</div>
				
					<CardDetailsBottomSection 
						comments={comments} 
						history={history} 
						cardId={_id}
					/>
				</LeftSection>

				<Divider/>

				<RightSection {...data.getCard} />
			</DetailsWrapper>
		)
	}

	return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose}
			modalStyles={{
				width: '55rem',
				height: '80vh',
				overflow: 'visible'
			}}
		>
			{render()}
		</Modal>
	)
}

export default CardDetails
