import React, { useState } from 'react'
import { FieldRenderProps } from 'react-final-form'

import Error from 'components/ui/forms/Error'
import TextEditor from 'components/TextEditor'
import { AdapterWrapper, Content, StyledLabel } from './TextEditorAdapter.styled'

type Props = FieldRenderProps<string, any>

const TextEditorAdapter: React.FC<Props> = ({
	label,
	input,
	isRequired,
	meta
}) => {
	const [editMode, setEditMode] = useState(false)
	const [oldState, setOldState] = useState(input.value)
	const { touched, visited, error, submitFailed } = meta
	const showError = (visited || submitFailed) && touched

	return (
		<>
			<AdapterWrapper>
				<StyledLabel isRequired={isRequired}>{label}</StyledLabel>
				{!editMode 
					? <Content 
						onClick={() => setEditMode(true)} 
						dangerouslySetInnerHTML={{ __html: input.value }}
					/>
					: <TextEditor onChange={input.onChange} value={input.value} />
				}
				<Error>{showError && error}</Error>      
			</AdapterWrapper>
			{editMode && 
				<>
					<button onClick={() => {
						setEditMode(false)
						input.onChange(input.value)
						setOldState(input.value)
					}}>Save</button>
					<button onClick={() => {
						setEditMode(false)
						input.onChange(oldState)
					}}>Cancel</button>
				</>
			}
		</>
	)
}

export default TextEditorAdapter
