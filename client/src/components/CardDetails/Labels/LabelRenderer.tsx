import React from 'react'
import { useApolloClient, useMutation } from '@apollo/client'
import { VscChromeClose } from 'react-icons/vsc'

import { REMOVE_LABEL } from 'graphql/mutations/card'
import { GET_BOARD } from 'graphql/queries/board'
import { useParams } from 'react-router-dom'
import { Label as LabelType } from 'types/card'
import { Label, LabelsWrapper } from './Labels.styled'
import { GET_CARD } from 'graphql/queries/card'

type Props = {
	labels: [string],
	_id: string
}

type RouteParams = {
	boardId: string
} 

type LabelsById = {
	[id: string]: LabelType
}

const LabelRenderer: React.FC<Props> = ({
	labels,
	_id: cardId
}) => {
	
	const { boardId } = useParams<RouteParams>()
	const client = useApolloClient()	
	const [removeLabel, data] = useMutation(REMOVE_LABEL)
	
	if(!labels.length) return null

	const { getBoard: { labels:  allLabels } } = client.readQuery({
		query: GET_BOARD,
		variables: { id: boardId }
	})

	const labelsById = allLabels.reduce((acc: LabelsById, label: LabelType) => ({
		...acc,
		[label._id]: label
	}), {})

	const handleRemove = (id: string) => {
		removeLabel({
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
		<LabelsWrapper>
			{labels.map(id => {
				const { bg_color, name } = labelsById[id]
				return (
					<Label 
						onClick={() => handleRemove(id)} 
						key={id} 
						bgColor={bg_color}
					>
						<div>{name}</div>
						<div><VscChromeClose/></div>
					</Label>
				)
			})}
		</LabelsWrapper>
	)
}

export default LabelRenderer
