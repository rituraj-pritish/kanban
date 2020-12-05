import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Divider, LeftSection, SkeletonWrapper } from './CardDetails.styled'
import { RootWrapper } from './RightSection/RightSection.styled'

const CardDetailsSkeleton: React.FC = () => {
	return (
		<SkeletonWrapper>
			<LeftSection>
				<Skeleton width={100} style={{ marginBottom: '0.5rem', marginTop: '1rem' }} />
				<Skeleton height={35} />

				<Skeleton width={100} style={{ marginBottom: '0.5rem', marginTop: '1rem' }} />
				<Skeleton height={100} />
			</LeftSection>

			<Divider/>

			<RootWrapper>
				<Skeleton height={35} count={3} style={{ marginBottom: '0.5rem' }}/>
			</RootWrapper>
		</SkeletonWrapper>
	)
}

export default CardDetailsSkeleton
