import React from 'react'
import { FieldRenderProps } from 'react-final-form'

import Error from 'components/ui/forms/Error'
import TextEditor from 'components/TextEditor'
import { AdapterWrapper, StyledLabel } from './TextEditorAdapter.styled'

type Props = FieldRenderProps<string, any>

const TextEditorAdapter: React.FC<Props> = ({
	label,
	input,
	isRequired,
	meta
}) => {
	const { touched, visited, error, submitFailed } = meta
	const showError = (visited || submitFailed) && touched
  
	return (
		<AdapterWrapper>
			<StyledLabel isRequired={isRequired}>{label}</StyledLabel>
			<TextEditor onChange={input.onChange} value={input.value} />
			<Error>{showError && error}</Error>      
		</AdapterWrapper>
	)
}

export default TextEditorAdapter
