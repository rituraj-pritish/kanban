import React, { useRef, useState } from 'react'
import { BiPencil, BiCheck } from 'react-icons/bi'

import { ListTitle, StyledIconButton, StyledInput } from './List.styled'
import ListToggleMenu from './ListToggleMenu'

type Props = {
  title: string,
  listId: string,
  provided: any,
  boardId: string
}

const Title: React.FC<Props> = ({ title, listId, boardId, provided }) => {
	const [text, setText] = useState(title)
	const [editMode, setEditMode] = useState(false)
	const inputRef = useRef(null)
  
	const handleSave = () => {
		// todo update list
		// todo add disabled mode to icon button
		// todo disable icon button when no text
		setEditMode(false)
	}
  
	return (
		<ListTitle {...provided.dragHandleProps}>
			{
				editMode
					? <StyledInput 
						autoFocus
						ref={inputRef}
						value={text} 
						onChange={(
							e: React.ChangeEvent<HTMLInputElement>): void => {
							setText(e.target.value)
						}}
					/>
					: <span>{title}</span>
			}
			<div>
				{
					!editMode
						? <StyledIconButton icon={<BiPencil/>} onClick={() => setEditMode(true)} />
						: <StyledIconButton icon={<BiCheck/>} onClick={handleSave} />
				}
				<ListToggleMenu listName={title} listId={listId} boardId={boardId} />
			</div>
		</ListTitle>
	)
}

export default Title
