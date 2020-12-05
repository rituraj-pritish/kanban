import React from 'react'
import { AiFillTags } from 'react-icons/ai'

import AddToCard from '../AddToCard'

const Labels: React.FC = () => {
	return (
		<AddToCard label='Labels' icon={<AiFillTags/>}>
      content
		</AddToCard>
	)
}

export default Labels
