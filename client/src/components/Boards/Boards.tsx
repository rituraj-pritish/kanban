import React, { useContext, useEffect, useState  } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import Button from 'components/ui/Button'
import { GET_BOARDS } from 'graphql/queries/board'
import { BoardCard, CardsWrapper } from './Boards.styled'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from 'graphql/mutations/board'
import AuthContext from 'contexts/auth/AuthContext'

const Boards: React.FC = () => {
	const history = useHistory()
	const { user } = useContext(AuthContext)
	
	const [showInput, setShowInput] = useState<boolean>(true)
	const [text, setText] = useState<string>()
	const [createBoard, res] = useMutation(CREATE_BOARD)

	const handleSubmit = () => {
		if(!text) return
		createBoard({
			variables: { name: text, user_id: user?._id , is_admin: true },
			refetchQueries: [{
				query: GET_BOARDS,
				variables: {
					user_id: user?._id
				}
			}]
		})
	}

	const [getBoards, { data, loading }] = useLazyQuery(GET_BOARDS)

	useEffect(() => {
		if(user?._id) {
			getBoards({ variables: {
				user_id: user._id
			} })
		}
	}, [user])

	if (loading) return <div>loading</div>

	return (
		<>
			<div>Boards</div>
			<CardsWrapper>
				{data?.getBoards.map(
					({ _id, name }: {_id: string, name: string}) => 
						<BoardCard key={_id} onClick={() => history.push(`/board/${_id}`)}>
							{name}
						</BoardCard>
				)}
			</CardsWrapper>

			{showInput && 
				<input 
					value={text} 
					onChange={(
						e: React.ChangeEvent<HTMLInputElement>): void => 
						setText(e.target.value)} />
			}
			<Button onClick={handleSubmit}>Create new board</Button>
		</>
	)
}

export default Boards
