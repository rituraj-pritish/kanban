import React from 'react'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  
`

interface Props {
  isRequired?: boolean,
  children: React.ReactNode
}

const Label: React.FC<Props> = ({ isRequired, children }) => {
	return (
		<LabelWrapper>
			{children} {isRequired && <span style={{ color: 'red' }}>*</span>}
		</LabelWrapper>
	)
}

export default Label
