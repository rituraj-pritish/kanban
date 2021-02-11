import React, { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

import Input from 'components/ui/Input'
import Label from 'components/ui/forms/Label'
import { ColorBox, ColorsWrapper } from './Labels.styled'
import { FlexBox, HDivider } from 'components/GlobalStyles'
import Button from 'components/ui/Button'
import { useMutation } from '@apollo/client'
import { CREATE_LABEL, DELETE_LABEL, UPDATE_LABEL } from 'graphql/mutations/board'
import { GET_BOARD } from 'graphql/queries/board'
import { useParams } from 'react-router-dom'
import { Label as LabelType } from 'types/card'
import { VARIANTS } from 'constants/button'

const COLORS = ['yellow', 'red', 'blue', 'green', 'magenta', 'purple', 'grey']

type RouteParams = {
	boardId: string
}

type Props = {
	label?: LabelType | null,
	hideForm: () => void
}

const CreateNewLabel: React.FC<Props> = ({
	hideForm,
	label
}) => {
	const { boardId } = useParams<RouteParams>()
	const [text, setText] = useState<string>(label ? label.name : '')
	const [selectedColor, setSelectedColor] = useState<string>(label ? label.bg_color : '')
	const [createLabel] = useMutation(CREATE_LABEL)
	const [updateLabel] = useMutation(UPDATE_LABEL)
	const [deleteLabel] = useMutation(DELETE_LABEL)

	const handleCreate = () => {
		createLabel({
			variables: {
				board_id: boardId,
				name: text,
				bg_color: selectedColor
			},
			refetchQueries: [{
				query: GET_BOARD,
				variables: { id: boardId }
			}]
		})
			.then(() => hideForm())
	}

	const handleUpdate = () => {
		updateLabel({
			variables: {
				board_id: boardId,
				label_id: label?._id,
				name: text,
				bg_color: selectedColor
			},
			refetchQueries: [{
				query: GET_BOARD,
				variables: { id: boardId }
			}]
		})
			.then(() => hideForm())
	}

	const handleDelete = () => {
		deleteLabel({
			variables: {
				board_id: boardId,
				label_id: label?._id
			},
			refetchQueries: [{
				query: GET_BOARD,
				variables: { id: boardId }
			}]
		})
			.then(() => hideForm())
	}

	return (
		<div>
			<Label>Name</Label>
			<Input 
				onChange={(
					e: React.ChangeEvent<HTMLTextAreaElement>): void => {
					setText(e.target.value)
				}} 
				value={text}
			/>
			<Label>Color</Label>
			<ColorsWrapper>
				{COLORS.map((color, i) => {
					const selected = selectedColor === color
					return (
						<ColorBox 
							onClick={() => setSelectedColor(color)} 
							style={{ backgroundColor: color }} 
							key={i}
						>
							{selected && <FiCheck/>}
						</ColorBox>
					)})}
			</ColorsWrapper>
			<HDivider/>
			<FlexBox justify={label ? 'space-between' : 'flex-end'}>
				{label && <Button
					onClick={handleDelete}
					variant={VARIANTS.DANGER}
				>
					Delete
				</Button>}
				<Button
					disabled={!text || !selectedColor}
					onClick={label ? handleUpdate : handleCreate}
				>
					{!label ? 'Create' : 'Update'}
				</Button>
			</FlexBox>
		</div>
	)
}

export default CreateNewLabel
