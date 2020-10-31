import TextEditorAdapter from 'components/ui/forms/TextEditorAdapter/TextEditorAdapter'
import TextFieldAdapter from 'components/ui/forms/TextFieldAdapter'
import React from 'react'
import { Field, Form } from 'react-final-form'

type Props = {
  initialValues: {
    [x: string]: any
  }
}

const CardDetailsForm: React.FC<Props> = ({ initialValues }) => {
	return (
		<Form
			initialValues={initialValues}
			onSubmit={() => {}}
			render={({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit} >
						<Field
							name='title'
							label='Title'
							component={TextFieldAdapter}
						/>
						<Field
							name='description'
							label='Description'
							component={TextEditorAdapter}
						/>
					</form>
				)
			}}
		/>
	)
}

export default CardDetailsForm
