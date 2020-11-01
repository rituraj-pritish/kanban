import TextEditorAdapter from 'components/ui/forms/TextEditorAdapter/TextEditorAdapter'
import TextFieldAdapter from 'components/ui/forms/TextFieldAdapter'
import { required } from 'helpers/validators'
import React from 'react'
import { Field, Form } from 'react-final-form'

type Props = {
  initialValues: {
    [x: string]: any
	},
	onSubmit: (values: {
		title: string,
		description: string
	}) => void
}

const CardDetailsForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
	return (
		<Form
			initialValues={initialValues}
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit} >
						<Field
							name='title'
							label='Title'
							isRequired
							validate={required}
							component={TextFieldAdapter}
						/>
						<Field
							name='description'
							label='Description'
							component={TextEditorAdapter}
						/>
						<button type='submit'>Submit</button>
					</form>
				)
			}}
		/>
	)
}

export default CardDetailsForm
