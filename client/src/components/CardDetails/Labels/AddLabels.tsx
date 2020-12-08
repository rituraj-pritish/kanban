import React, { useState } from 'react'
import { useApolloClient, useMutation } from '@apollo/client'
import { AiFillTags } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

import AddToCard from '../RightSection/AddToCard'
import { GET_BOARD } from 'graphql/queries/board'
import { AddLabelsWrapper, LabelWrapper } from './Labels.styled'
import { Label } from 'types/card'
import { ADD_LABEL } from 'graphql/mutations/card'
import useSearchParams from 'hooks/useSearchParams'
import { GET_CARD } from 'graphql/queries/card'
import Button from 'components/ui/Button'
import CreateNewLabel from './CreateNewLabel'

type RouteParams = {
	boardId: string
}

const Labels: React.FC = () => {
	const { boardId } = useParams<RouteParams>()
	const client = useApolloClient()
	//@ts-expect-error
	const { selected: cardId } = useSearchParams(['selected'])
	const [addLabel, data] = useMutation(ADD_LABEL)
	const [isCreating, setIsCreating] = useState<boolean>(false)


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

	return (
		<AddToCard 
			title={isCreating ? 'Create Label' : 'Labels'}
			label='Labels' 
			icon={<AiFillTags/>}
			onBack={isCreating ? () => setIsCreating(false) : undefined}
			contentStyles={{
				width: '20rem'
			}}
		>
			{
				!isCreating
					?  
					<AddLabelsWrapper>
						{
							labels.map(({ name, bg_color, _id }: Label) => 
								<LabelWrapper key={_id} bgColor={bg_color} onClick={() => handleClick(_id)}>
									<div>{name}</div>
								</LabelWrapper>
							)
						}
						<Button onClick={() => setIsCreating(true)}>Create new label</Button>
					</AddLabelsWrapper>
					: <CreateNewLabel setIsCreating={setIsCreating} />
				
			}
		
		</AddToCard>
	)
}

export default Labels
