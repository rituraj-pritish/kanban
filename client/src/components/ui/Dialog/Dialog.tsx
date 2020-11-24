import { VARIANTS } from 'constants/button'
import KEYS from 'constants/keys'
import useKeyPress from 'hooks/useKeyPress'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Button from '../Button'

import Modal from '../Modal'
import { ButtonsWrapper, StyledInput, Text, Title } from './Dialog.styled'

type Props = {
	isOpen: boolean,
  title: string,
  text: string,
  onClose: () => void,
  onConfirm: (text?: string) => void,
  hasInput?: boolean,
  confirmDelete?: boolean,
  confirmText?: string
}

const Dialog: React.FC<Props> = ({
	isOpen,
	title,
	text,
	onClose,
	onConfirm,
	hasInput = false,
	confirmDelete = false,
	confirmText
}) => {
	const [inputText, setInputText] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>()
	const showInput = hasInput || confirmDelete
	const enterPress = useKeyPress(KEYS.ENTER)

	useEffect(() => {
		if(showInput && isOpen && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isOpen, inputRef])

	useLayoutEffect(() => {
		if(showInput && !inputText) return

		if(showInput) {
			onConfirm(inputText)
			return
		}

		onConfirm()
	}, [enterPress])
  
	const isPrimaryButtonDisabled = () => {
		if(hasInput) return !inputText
    
		if(confirmDelete) {
			return confirmText !== inputText  
		}
    
		return false
	}

	const onRequestClose = () => {
		onClose()
		setInputText('')
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			showCloseIcon={false}
			modalStyles={{
				width: '30rem',
				height: 'fit-content'
			}}
		>
			<Title>{title}</Title>
			<Text dangerouslySetInnerHTML={{ __html: text }} />
			{/* @ts-expect-error */}
			{showInput && <StyledInput ref={inputRef} onChange={e => setInputText(e.target.value)} />}   
			<ButtonsWrapper>
				<Button 
					variant={VARIANTS.CANCEL} 
					onClick={onRequestClose} 
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
