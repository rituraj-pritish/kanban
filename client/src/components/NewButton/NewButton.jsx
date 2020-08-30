import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
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

const NewButton = ({
	havePaddingIfOpen,
	onCancel = () => {},
	onSubmit,
	placeholder,
	children
}) => {
	const [text, setText] = useState('')
	const [showInput, setShowInput] = useState(false)
	const enterPress = useKeyPress(KEYS.ENTER)

	const inputRef = useRef()

	useEffect(() => {
		if (showInput) inputRef.current.focus()
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
						type="text"
						placeholder={placeholder}
						ref={inputRef}
						onChange={e => setText(e.target.value)}
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
NewButton.propTypes = {
	onCancel: PropTypes.func,
	onSubmit: PropTypes.func.isRequired,
	havePaddingIfOpen: PropTypes.bool,
	children: PropTypes.node.isRequired,
	placeholder: PropTypes.string
}

export default NewButton
