import React, { useState } from 'react'
import { FieldRenderProps } from 'react-final-form'

import Error from 'components/common/ui/forms/Error'
import TextEditor from 'components/common/TextEditor'
import { AdapterWrapper, ButtonsWrapper, Content, StyledLabel } from './TextEditorAdapter.styled'
import Button from 'components/common/ui/Button'
import { VARIANTS } from 'constants/button'

type Props = FieldRenderProps<string, any>

const TextEditorAdapter: React.FC<Props> = ({
	label,
	input,
	isRequired,
	meta,
	onBlur
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
				<ButtonsWrapper>
					<Button 
						variant={VARIANTS.PRIMARY}
						onClick={() => {
							setEditMode(false)
							input.onChange(input.value)
							setOldState(input.value)
							onBlur()
						}}>
							Save
					</Button>
					<Button 
						variant={VARIANTS.CANCEL}
						onClick={() => {
							setEditMode(false)
							input.onChange(oldState)
						}}>
							Cancel
					</Button>
				</ButtonsWrapper>
			}
		</>
	)
}

export default TextEditorAdapter
