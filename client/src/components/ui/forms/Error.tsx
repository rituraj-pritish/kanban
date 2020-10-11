import React from 'react'

interface Props {
  children: React.ReactNode
}

const Error: React.FC<Props> = ({ children }) => {
	return (
		<div style={{ color: 'red' }}>
			{children}
		</div>
	)
}

export default Error
