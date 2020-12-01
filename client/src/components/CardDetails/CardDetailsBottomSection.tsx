import React, { useState } from 'react'

import { Comment, History } from 'types/card'
import Button from 'components/ui/Button'
import CardComments from './CardComments'
import CardHistory from './CardHistory'
import { VARIANTS } from 'constants/button'

const HISTORY = 'HISTORY'
const COMMENTS = 'COMMENTS'

type Props = {
	comments: Comment[],
	history: History[],
	cardId: string
}

const CardDetailsBottomSection: React.FC<Props> = ({
	comments,
	history,
	cardId
}) => {
	const [tab, setTab] = useState(HISTORY)
  
	return (
		<div>
			<Button 
				variant={VARIANTS.CANCEL}
				onClick={() => setTab(COMMENTS)}
				disabled={tab === COMMENTS}
			>Comments</Button>
			<Button 
				variant={VARIANTS.CANCEL}
				onClick={() => setTab(HISTORY)}
				disabled={tab === HISTORY}
			>History</Button>

			{tab === COMMENTS 
				? <CardComments comments={comments} cardId={cardId}/>
				: <CardHistory history={history}/>
			}    
		</div>
	)
}

export default CardDetailsBottomSection
