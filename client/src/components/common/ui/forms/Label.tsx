import React from 'react'
import styled from 'styled-components'
import theme from 'theme'

const LabelWrapper = styled.div`
	margin-top: ${theme.spacing(0.6)};
	
  & > span:first-child {
		margin-right: ${theme.spacing(0.4)};
		font-weight: 600;
	}
`

interface Props {
  isRequired?: boolean,
	children: React.ReactNode,
	className?: string
}

const Label: React.FC<Props> = ({ isRequired, children, className }) => {
	return (
		<LabelWrapper className={className}>
			<span>
				{children} 
			</span>
			{isRequired && <span style={{ color: 'red' }}>*</span>}
		</LabelWrapper>
	)
}

export default Label
