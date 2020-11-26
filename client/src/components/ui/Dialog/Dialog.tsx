import React, { useLayoutEffect, useRef, useState } from 'react'

import { VARIANTS } from 'constants/button'
import KEYS from 'constants/keys'
import useKeyPress from 'hooks/useKeyPress'
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
	confirmDeleteWithText?: boolean,
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
	confirmDeleteWithText = false,
	confirmText
}) => {
	const [inputText, setInputText] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>()
	const enterPress = useKeyPress(KEYS.ENTER)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const showInput = hasInput || confirmDeleteWithText

	useLayoutEffect(() => {
		if(showInput && isOpen && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isOpen, inputRef])

	const handleConfirm = () => {
		setIsLoading(true)
		if(showInput) {
			onConfirm(inputText)
			//@ts-expect-error
				.finally(() => {
					setIsLoading(false)
					onClose()
				})
			return
		}

		onConfirm()
		//@ts-expect-error
			.finally(() => {
				setIsLoading(false)
				onClose()
			})
	}

	useLayoutEffect(() => {
		if(!enterPress) return
		if(showInput && !inputText) return

		handleConfirm()
	}, [enterPress])
  
	const isPrimaryButtonDisabled = () => {
		if(hasInput) return !inputText
    
		if(confirmDeleteWithText) {
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
					variant={confirmDelete || confirmDeleteWithText
						 ? VARIANTS.DANGER : VARIANTS.PRIMARY}					
					onClick={handleConfirm} 
					isLoading={isLoading}
				>
          Confirm
				</Button>
			</ButtonsWrapper> 
		</Modal>
	)
}

export default Dialog
