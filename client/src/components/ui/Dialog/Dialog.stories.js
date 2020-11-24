import React from 'react'
import Dialog from './Dialog'

export default { title: 'Dialog' }

export const ConfirmDialog = () => <Dialog
	title='Dialog title'
	text="Some random text to inform user what's happening"
/>

export const InputDialog = () => <Dialog
	hasInput
	title='Dialog title'
	text="Some random text to inform user what's happening"
/>

export const DeleteDialog = () => <Dialog
	confirmDelete
	confirmText='abc'
	title='Dialog title'
	text='confirm text is <b>abc</b>'
/>