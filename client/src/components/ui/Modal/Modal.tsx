import React from 'react'
import { StyledModal } from './Modal.styled'
import { CSSProperties } from 'styled-components'

interface Props {
  isOpen: boolean,
  onRequestClose: () => void,
	children: React.ReactNode,
	modalStyles: CSSProperties
}

const ModalComponent: React.FC<Props> = ({ 
	isOpen, 
	onRequestClose, 
	modalStyles, 
	children 
}) => {
	return (
		<StyledModal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick
			modalStyles={modalStyles}
		>
			{children}
		</StyledModal>
	)
}

export default ModalComponent
