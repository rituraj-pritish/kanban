import React, { useContext } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { useParams } from 'react-router-dom'

import { GET_BOARDS } from 'graphql/queries/board'
import ToggleMenu from 'components/ui/ToggleMenu'
import PLACEMENTS from 'constants/placements'
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
	const { boardId } = useParams<RouteParams>()
	const { user } = useContext(AuthContext)
  
	const refetchBoards = {
		query: GET_BOARDS,
		variables: { user_id: user?._id }
	}

	return (
		<>
			<ToggleMenu
				placement={PLACEMENTS.LEFT}
				trigger={
					<IconButton 
						icon={<IoMdSettings/>}
						onClick={() => {}}
					/>		
				}
			>
				<DeleteBoard boardName={boardName} boardId={boardId} refetchBoards={refetchBoards}/>
				<RenameBoard boardName={boardName} boardId={boardId} refetchBoards={refetchBoards}/>
			</ToggleMenu>

		</>
	)
}

export default BoardNavToggleMenu
