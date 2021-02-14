import React from 'react'
import { CloseIcon, StyledModal } from './Modal.styled'
import { CSSProperties } from 'styled-components'

interface Props {
  isOpen: boolean,
  onRequestClose: () => void,
	children: React.ReactNode,
	modalStyles?: CSSProperties,
	showCloseIcon?: boolean
}

const ModalComponent: React.FC<Props> = ({ 
	isOpen, 
	onRequestClose, 
	modalStyles, 
	children,
	showCloseIcon = true 
}) => {
	return (
		<StyledModal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick
			modalStyles={modalStyles}
		>
			{showCloseIcon && <CloseIcon onClick={onRequestClose}/>}
			{children}
		</StyledModal>
	)
}

export default ModalComponent
