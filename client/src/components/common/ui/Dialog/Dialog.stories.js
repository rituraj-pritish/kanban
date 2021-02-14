import React from 'react'
import Dialog from './Dialog'

export default { title: 'Dialog' }

export const Confirm = () => <Dialog
	isOpen
	onConfirm={() => {}}
	title='Dialog title'
	text="Some random text to inform user what's happening"
/>

export const Input = () => <Dialog
	isOpen
	hasInput
	title='Dialog title'
	text="Some random text to inform user what's happening"
/>

export const ConfirmDelete = () => <Dialog
	isOpen
	onConfirm={() => {}}
	confirmDelete
	title='Dialog title'
	text='Are you sure you want to delete this ?'
/>

export const DeleteWithText = () => <Dialog
	isOpen
	confirmDeleteWithText
	confirmText='abc'
	title='Dialog title'
	text='confirm text is <b>abc</b>'
/>