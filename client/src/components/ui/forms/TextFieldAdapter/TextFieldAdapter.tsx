
import React from 'react'

import Input from 'components/ui/Input'
import Label from '../Label'
import Error from 'components/ui/forms/Error'
import { AdapterWrapper, TextArea } from './TextField.styled'

interface Props {
  input: {
		onChange: () => void
	},
	meta: {
		touched: boolean,
		visited: boolean,
		submitFailed: boolean,
		submitError: string,
		error: string
	},
	label: string,
	isRequired: boolean,
	inputType: string
}

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
					:<Input {...input} type={inputType} {...otherProps} mb={0} mt='0.5rem' />
			}
			<Error>{showError && error}</Error>
		</AdapterWrapper>
	)
}

export default TextFieldAdapter