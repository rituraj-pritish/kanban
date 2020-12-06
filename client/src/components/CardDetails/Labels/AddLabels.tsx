import React from 'react'
import { useApolloClient, useMutation } from '@apollo/client'
import { AiFillTags } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

import AddToCard from '../RightSection/AddToCard'
import { GET_BOARD } from 'graphql/queries/board'
import { LabelWrapper } from './Labels.styled'
import { Label } from 'types/card'
import { ADD_LABEL } from 'graphql/mutations/card'
import useSearchParams from 'hooks/useSearchParams'
import { GET_CARD } from 'graphql/queries/card'

type RouteParams = {
	boardId: string
}

const Labels: React.FC = () => {
	const { boardId } = useParams<RouteParams>()
	const client = useApolloClient()
	//@ts-expect-error
	const { selected: cardId } = useSearchParams(['selected'])
	const [addLabel, data] = useMutation(ADD_LABEL)


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
			label='Labels' 
			icon={<AiFillTags/>}
			contentStyles={{
				width: '20rem'
			}}
		>
			{
				labels.map(({ name, bg_color, _id }: Label) => 
					<LabelWrapper key={_id} bgColor={bg_color} onClick={() => handleClick(_id)}>
						<div>{name}</div>
					</LabelWrapper>
				)
			}
		</AddToCard>
	)
}

export default Labels
