import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

import useKeyPress from 'hooks/useKeyPress'
import KEYS from 'constants/keys'
import Button from 'components/ui/Button'
import IconButton from 'components/ui/IconButton/IconButton'
import {
	AddButton,
	StyledInput,
	ActionsWrapper,
	RootWrapper
} from './NewButton.styled'

interface Props {
	havePaddingIfOpen?: boolean,
	onCancel?: () => void,
	onSubmit: (text: string) => void,
	placeholder: string,
	children: React.ReactNode
}

const NewButton: React.FC<Props> = ({
	havePaddingIfOpen = false,
	onCancel = () => {},
	onSubmit,
	placeholder,
	children
}) => {
	const [text, setText] = useState<string>('')
	const [showInput, setShowInput] = useState<boolean>(false)
	const enterPress = useKeyPress(KEYS.ENTER)

	const inputRef = useRef<HTMLTextAreaElement>(null)

	useLayoutEffect(() => {
		if (showInput && inputRef.current) inputRef.current.focus()
	}, [showInput, onSubmit])

	useEffect(
		() => () => {
			setText('')
		},
		[]
	)

	useEffect(() => {
		if (enterPress && text.trim()) {
			setText('')
			onSubmit(text)
		}
	}, [enterPress])

	return (
		<RootWrapper havePadding={havePaddingIfOpen} showInput={showInput}>
			{showInput ? 
				<>
					<StyledInput
						placeholder={placeholder}
						ref={inputRef}
						onChange={(
							e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value)}
						value={text}
					/>
					<ActionsWrapper>
						<Button
							disabled={!text}
							onClick={() => {
								setText('')
								onSubmit(text)
							}}
						>
              Add
						</Button>
						<IconButton
							icon={<FaTimes size="1.15rem" />}
							onClick={() => {
								setText('')
								setShowInput(false)
								onCancel()
							}}
						/>
					</ActionsWrapper>
				</>
				: 
				<AddButton onClick={() => setShowInput(true)}>
					<BsPlus size="1.25rem" />
					<div>{children}</div>
				</AddButton>
			}
		</RootWrapper>
	)
}

export default NewButton
