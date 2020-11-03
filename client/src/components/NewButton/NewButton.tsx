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
import useComponentVisible from 'hooks/useComponentVisible'

interface Props {
	havePaddingIfOpen?: boolean,
	onCancel?: () => void,
	onSubmit: (text: string) => void,
	placeholder: string,
	children: React.ReactNode,
	className?: string
}

const NewButton: React.FC<Props> = ({
	havePaddingIfOpen = false,
	onCancel = () => {},
	onSubmit,
	placeholder,
	children,
	className
}) => {
	const [ ref, showInput, setShowInput ] = useComponentVisible(false)
	const [text, setText] = useState<string>('')
	const enterPress = useKeyPress(KEYS.ENTER)

	const inputRef = useRef<HTMLTextAreaElement>(null)

	useLayoutEffect(() => {
		if (showInput && inputRef.current) {
			setText('')
			inputRef.current.focus()
		}
	}, [showInput, onSubmit])

	useEffect(() => {
		if(!showInput) {
			setText('')
		}
	}, [setShowInput, showInput])

	useLayoutEffect(() => {
		if (enterPress && text.trim()) {
			onSubmit(text)
			setText('')
		}
	}, [enterPress])

	return (
		<RootWrapper className={className} havePadding={havePaddingIfOpen} showInput={showInput}>
			{showInput ? 
				<div ref={ref}>
					<StyledInput
						placeholder={placeholder}
						ref={inputRef}
						onChange={(
							e: React.ChangeEvent<HTMLTextAreaElement>): void => {
							setText(e.target.value)
						}}
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
				</div>
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
