import React, { useRef, useState } from 'react'
import RichTextEditor from 'react-rte'
import { EditorWrapper } from './TextEditor.styled'

type Props = {
	value: any,
	onChange: (value: any) => void
}

const TextEditor: React.FC<Props> = ({
	value,
	onChange
}) => {
	const [state, setState] = useState(value || RichTextEditor.createEmptyValue())

	// @ts-expect-error
	const handleChange = state => {
		setState(state)
		onChange(state)
	}
	return (
		<EditorWrapper>
			<RichTextEditor
				value={state}
				onChange={handleChange}
			/>
		</EditorWrapper>
	)
}

export default TextEditor
