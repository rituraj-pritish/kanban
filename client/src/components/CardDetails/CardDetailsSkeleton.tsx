import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { DetailsWrapper, Divider, LeftSection, RightSection } from './CardDetails.styled'

const CardDetailsSkeleton: React.FC = () => {
	return (
		<DetailsWrapper>
			<LeftSection>
				<Skeleton width={100} style={{ marginBottom: '0.5rem', marginTop: '1rem' }} />
				<Skeleton height={35} />

				<Skeleton width={100} style={{ marginBottom: '0.5rem', marginTop: '1rem' }} />
				<Skeleton height={100} />
			</LeftSection>

			<Divider/>

			<RightSection>
				<Skeleton height={35} count={3} style={{ marginBottom: '0.5rem' }}/>
			</RightSection>
		</DetailsWrapper>
	)
}

export default CardDetailsSkeleton
