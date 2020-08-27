import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BsPlus } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

import useKeyPress from 'hooks/useKeyPress'
import KEYS from 'constants/keys'
import IconButton from 'components/ui/IconButton/IconButton'
import Button from 'components/ui/Button'
import { 
	AddButton, 
	StyledInput, 
	ActionsWrapper 
} from './List.styled'

const NewCardButton = ({ handleAdd }) => {
	const [showInput, setShowInput] = useState(false)
	const [text, setText] = useState('')
	const enterPress = useKeyPress(KEYS.ENTER)
  
	const inputRef = useRef()
  
	useEffect(() => {
		if (showInput) inputRef.current.focus()
	}, [showInput])

	useEffect(() => () => {
		setText('')
	},[])

	useEffect(() => {
		if(enterPress) {
			handleAddClick()
		} 
	}, [enterPress])

	const handleAddClick = () => {
		if(!text) return
		handleAdd(text)
		setText('')
		setShowInput(false)
	}

	//TODO disable add button if not text is added

	return showInput ? (
		<>
			<StyledInput
				type='text' 
				placeholder='Enter title of card'
				ref={inputRef} 
				onChange={e => setText(e.target.value)} 
			/>
			<ActionsWrapper>
				<Button onClick={handleAddClick}
				>
          Add
				</Button>
				<IconButton 
					icon={<FaTimes size='1.15rem' />} 
					onClick={() => setShowInput(false)}
				/>
			</ActionsWrapper>
		</>
	) : (
		<AddButton onClick={() => setShowInput(true)}>
			<BsPlus size='1.25rem' />
			<div>Add new card</div>
		</AddButton>
	)
}
  

NewCardButton.propTypes = {
	handleAdd: PropTypes.func.isRequired
}

export default NewCardButton
