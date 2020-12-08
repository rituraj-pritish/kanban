import React, { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

import Input from 'components/ui/Input'
import Label from 'components/ui/forms/Label'
import { ColorBox, ColorsWrapper } from './Labels.styled'
import { FlexBox, HDivider } from 'components/GlobalStyles'
import Button from 'components/ui/Button'
import { useMutation } from '@apollo/client'
import { CREATE_LABEL } from 'graphql/mutations/board'
import { GET_BOARD } from 'graphql/queries/board'
import { useParams } from 'react-router-dom'

const COLORS = ['yellow', 'red', 'blue', 'green', 'magenta', 'purple', 'grey']

type RouteParams = {
	boardId: string
}

type Props = {
	setIsCreating: (state: boolean) => void
}

const CreateNewLabel: React.FC<Props> = ({
	setIsCreating
}) => {
	const { boardId } = useParams<RouteParams>()
	const [text, setText] = useState<string>('')
	const [selectedColor, setSelectedColor] = useState<string>('')
	const [createLabel, data] = useMutation(CREATE_LABEL)

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
			.then(() => setIsCreating(false))
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
			<FlexBox justify='flex-end'>
				<Button
					disabled={!text || !selectedColor}
					onClick={handleCreate}
				>
					Create
				</Button>
			</FlexBox>
		</div>
	)
}

export default CreateNewLabel
