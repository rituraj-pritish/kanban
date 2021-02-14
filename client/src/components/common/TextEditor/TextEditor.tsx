import React, { useState } from 'react'
import RichTextEditor, { EditorValue } from 'react-rte'
import { EditorWrapper } from './TextEditor.styled'

type Props = {
	value: any,
	onChange: (value: any) => void
}

const TextEditor: React.FC<Props> = ({
	value,
	onChange
}) => {
	const initialValue = value 
		? () => RichTextEditor.createValueFromString(value, 'html')
		: () => RichTextEditor.createEmptyValue()
	const [state, setState] = useState(initialValue)

	const handleChange = (state: EditorValue) => {
		setState(state)
		onChange(state.toString('html'))
	}

	return (
		<>
			<EditorWrapper>
				<RichTextEditor
					value={state}
					onChange={handleChange}
				/>
			</EditorWrapper>
		</>
	)
}

export default TextEditor
