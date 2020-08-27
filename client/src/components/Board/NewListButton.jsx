import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BsPlus } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

import { ButtonWrapper, StyledInput, RootWrapper, ActionsWrapper } from './Board.styled'
import useKeyPress from 'hooks/useKeyPress'
import KEYS from 'constants/keys'
import Button from 'components/ui/Button'
import IconButton from 'components/ui/IconButton/IconButton'

const NewListButton = () => {
	const [showInput, setShowInput] = useState(true)
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
		// handleAdd(text)
		setText('')
		setShowInput(false)
	}
	return (
		<RootWrapper removePadding={!showInput} >
			{	showInput
				? (
					<>
						<StyledInput 
							ref={inputRef} 
							onChange={e => setText(e.target.value)}
						/>
						<ActionsWrapper>
							<Button>Add</Button>
							<IconButton 
								icon={<FaTimes/>} 
								onClick={() => setShowInput(false)} 
							/>
						</ActionsWrapper>
					</>
				)
				: (
					<ButtonWrapper onClick={() => setShowInput(true)} >
						<BsPlus/>
            Add new list
					</ButtonWrapper>
				)}
		</RootWrapper>
	)
}

NewListButton.propTypes = {

}

export default NewListButton
