import React from 'react'
import { Field, Form } from 'react-final-form'

import { required } from 'helpers/validators'
import TextEditorAdapter from 'components/ui/forms/TextEditorAdapter/TextEditorAdapter'
import TextFieldAdapter from 'components/ui/forms/TextFieldAdapter'

type Props = {
  initialValues: {
    [x: string]: any
	},
	onSubmit: (values: {
		title: string,
		description: string
	}, 
	formState: {getState: () => {pristine: boolean}}
	) => void
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
							onBlur={handleSubmit}
						/>
						<Field
							name='description'
							label='Description'
							component={TextEditorAdapter}
							onBlur={handleSubmit}
						/>
					</form>
				)
			}}
		/>
	)
}

export default CardDetailsForm
