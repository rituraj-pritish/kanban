import React, { useContext } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { useMutation } from '@apollo/client'
import { useHistory, useParams } from 'react-router-dom'

import { DELETE_BOARD } from 'graphql/mutations/board'
import ToggleMenu from 'components/ui/ToggleMenu'
import PLACEMENTS from 'constants/placements'
import IconButton from 'components/ui/IconButton'
import { GET_BOARDS } from 'graphql/queries/board'
import AuthContext from 'contexts/auth/AuthContext'

type RouteParams = {
  boardId: string
}

const BoardNavToggleMenu: React.FC = () => {
	const { boardId } = useParams<RouteParams>()
	const { user } = useContext(AuthContext)
	const history = useHistory()
  
  
	const [deleteBoard, res] = useMutation(DELETE_BOARD, {
		variables: { id: boardId },
		refetchQueries: [{
			query: GET_BOARDS,
			variables: { user_id: user?._id }
		}]
	})
  
	const handleDeleteBoard = () => {
		deleteBoard()
			.then(() => history.push('/boards'))
	}
  
	return (
		<ToggleMenu
			placement={PLACEMENTS.LEFT}
			trigger={
				<IconButton 
					icon={<IoMdSettings/>}
					onClick={() => {}}
				/>		
			}
			items={[
				{ text: 'Delete board', onClick: handleDeleteBoard }
			]}
		/>
	)
}

export default BoardNavToggleMenu
