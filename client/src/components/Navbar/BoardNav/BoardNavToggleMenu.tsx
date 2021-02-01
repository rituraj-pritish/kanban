import React, { useContext, useState } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { useParams } from 'react-router-dom'

import { GET_BOARDS } from 'graphql/queries/board'
import ToggleMenu from 'components/ui/ToggleMenu'
import IconButton from 'components/ui/IconButton'
import AuthContext from 'contexts/auth/AuthContext'
import DeleteBoard from './DeleteBoard'
import RenameBoard from './RenameBoard'

type RouteParams = {
  boardId: string
}

type Props = {
	boardName: string
}

const BoardNavToggleMenu: React.FC<Props> = ({ boardName }) => {
	const [showDeleteDialog, setShowDeleteDialog] = useState(false)
	const [showRenameDialog, setShowRenameDialog] = useState(false)
	const { boardId } = useParams<RouteParams>()
	const { user } = useContext(AuthContext)
  
	const refetchBoards = {
		query: GET_BOARDS,
		variables: { user_id: user?._id }
	}

	const commonProps = {
		boardId,
		boardName,
		refetchBoards
	}

	return (
		<>
			<ToggleMenu
				trigger={
					<IconButton 
						icon={<IoMdSettings/>}
						onClick={() => {}}
					/>		
				}
				items={[
					{ text: 'Rename Board', onClick: () => setShowRenameDialog(true) },
					{ text: 'Delete Board', onClick: () => setShowDeleteDialog(true) }
				]}
			/>
			<RenameBoard 
				{...commonProps} 
				closeDialog={() => setShowRenameDialog(false)} 
				isOpen={showRenameDialog} 
			/>
			<DeleteBoard 
				{...commonProps} 
				closeDialog={() => setShowDeleteDialog(false)} 
				isOpen={showDeleteDialog} 
			/>
		</>
	)
}

export default BoardNavToggleMenu
