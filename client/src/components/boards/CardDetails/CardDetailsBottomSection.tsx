import React, { useState } from 'react'

import { Comment, History } from 'types/card'
import CardComments from './CardComments'
import CardHistory from './CardHistory'
import { BottomSectionWrapper, Tab, Tabs } from './CardDetails.styled'

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
		<BottomSectionWrapper>
			<Tabs>
				<Tab 
					onClick={() => setTab(COMMENTS)}
					isActive={tab === COMMENTS}
				>Comments</Tab>
				<Tab 
					onClick={() => setTab(HISTORY)}
					isActive={tab === HISTORY}
				>History</Tab>
			</Tabs>

			{tab === COMMENTS 
				? <CardComments comments={comments} cardId={cardId}/>
				: <CardHistory history={history} cardId={cardId}/>
			}    
		</BottomSectionWrapper>
	)
}

export default CardDetailsBottomSection
