import React from 'react'
import { FieldRenderProps } from 'react-final-form'

import Input from 'components/common/ui/Input'
import Label from '../Label'
import Error from 'components/common/ui/forms/Error'
import { AdapterWrapper, TextArea } from './TextField.styled'

type Props = FieldRenderProps<string, any>

const TextFieldAdapter: React.FC<Props> = ({
	input,
	meta,
	label,
	isRequired = false,
	inputType = 'text',
	...otherProps
}) => {
	const { touched, visited, error, submitFailed } = meta
	const showError = (visited || submitFailed) && touched

	return (
		<AdapterWrapper>
			<Label isRequired={isRequired}>{label}</Label>
			{
				inputType === 'textarea' 
					? <TextArea {...input} {...otherProps} /> 
					:<Input {...input} type={inputType} {...otherProps} />
			}
			<Error>{showError && error}</Error>
		</AdapterWrapper>
	)
}

export default TextFieldAdapter