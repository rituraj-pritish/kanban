import React, { useState } from 'react'
import { useApolloClient, useMutation } from '@apollo/client'
import { AiFillTags } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { BiPencil } from 'react-icons/bi'

import AddToCard from '../RightSection/AddToCard'
import { GET_BOARD } from 'graphql/queries/board'
import { AddLabelsWrapper, LabelWrapper } from './Labels.styled'
import { Label } from 'types/card'
import { ADD_LABEL } from 'graphql/mutations/card'
import useSearchParams from 'hooks/useSearchParams'
import { GET_CARD } from 'graphql/queries/card'
import Button from 'components/ui/Button'
import CreateNewLabel from './CreateNewLabel'
import IconButton from 'components/ui/IconButton'

type RouteParams = {
	boardId: string
}

const Labels: React.FC = () => {
	const { boardId } = useParams<RouteParams>()
	const client = useApolloClient()
	const { selected: cardId } = useSearchParams(['selected'])
	const [addLabel] = useMutation(ADD_LABEL)
	const [isCreating, setIsCreating] = useState<boolean>(false)
	const [editingLabel, setEditingLabel] = useState<Label | null>(null)


	const { getBoard: { labels } } = client.readQuery({
		query: GET_BOARD,
		variables: { id: boardId }
	})

	const handleClick = (id: string) => {
		addLabel({
			variables: {
				card_id: cardId,
				label_id: id
			},
			refetchQueries: [{
				query: GET_CARD,
				variables: { id: cardId }
			}]
		})
	}

	const getTitle = () => {
		if(editingLabel) return editingLabel.name
		if(isCreating) return 'Create Label'
		return 'Labels'
	}

	const getBackFunction = () => {
		if(editingLabel) return () => setEditingLabel(null)
		if(isCreating) return () => setIsCreating(false)
		return undefined
	}

	return (
		<AddToCard 
			title={getTitle()}
			label='Labels' 
			icon={<AiFillTags/>}
			onBack={getBackFunction()}
			contentStyles={{
				width: '20rem'
			}}
		>
			{
				!isCreating && !editingLabel
					?  
					<AddLabelsWrapper>
						{
							labels.map((item: Label) => {
								const { name, bg_color, _id } = item

								return (
									<LabelWrapper key={_id} bgColor={bg_color} >
										<div onClick={() => handleClick(_id)}>{name}</div>
										<IconButton icon={<BiPencil/>} onClick={() => setEditingLabel(item)} />
									</LabelWrapper>
								)
							})
						}
						<Button onClick={() => setIsCreating(true)}>Create new label</Button>
					</AddLabelsWrapper>
					: <CreateNewLabel 
						hideForm={editingLabel ? () => setEditingLabel(null) : () => setIsCreating(false)} 
						label={editingLabel}
					/>
				
			}
		
		</AddToCard>
	)
}

export default Labels
