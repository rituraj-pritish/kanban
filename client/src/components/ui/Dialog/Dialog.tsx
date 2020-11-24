import { VARIANTS } from 'constants/button'
import React, { useState } from 'react'
import Button from '../Button'

import Modal from '../Modal'
import { ButtonsWrapper, StyledInput, Text, Title } from './Dialog.styled'

type Props = {
  title: string,
  text: string,
  onClose: () => void,
  onConfirm: (text: string | number) => void,
  hasInput?: boolean,
  confirmDelete?: boolean,
  confirmText?: string
}

const Dialog: React.FC<Props> = ({
	title,
	text,
	onClose,
	onConfirm,
	hasInput = false,
	confirmDelete = false,
	confirmText
}) => {
	const [inputText, setInputText] = useState<string>('')
  
	const showInput = hasInput || confirmDelete
  
	const isPrimaryButtonDisabled = () => {
		if(hasInput) return !inputText
    
		if(confirmDelete) {
			return confirmText !== inputText  
		}
    
		return false
	}

	return (
		<Modal
			isOpen={true}
			onRequestClose={onClose}
			showCloseIcon={false}
			modalStyles={{
				width: '30rem',
				height: 'fit-content'
			}}
		>
			<Title>{title}</Title>
			<Text dangerouslySetInnerHTML={{ __html: text }} />
			{/* @ts-expect-error */}
			{showInput && <StyledInput onChange={e => setInputText(e.target.value)} />}   
			<ButtonsWrapper>
				<Button 
					variant={VARIANTS.CANCEL} 
					onClick={onClose} 
				>
          Cancel
				</Button>
				<Button
					disabled={isPrimaryButtonDisabled()}
					variant={confirmDelete ? VARIANTS.DANGER : VARIANTS.PRIMARY}
					//@ts-expect-error
					onClick={showInput ? () => onConfirm(inputText) : onConfirm} 
				>
          Confirm
				</Button>
			</ButtonsWrapper> 
		</Modal>
	)
}

export default Dialog
