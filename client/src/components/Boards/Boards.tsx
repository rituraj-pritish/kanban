import React, { useContext, useEffect, useState  } from 'react'
import { useApolloClient, useLazyQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { GET_BOARDS } from 'graphql/queries/board'
import { BoardCard, CardsWrapper } from './Boards.styled'

import AuthContext from 'contexts/auth/AuthContext'

const Boards: React.FC = () => {
	const client = useApolloClient()
	const history = useHistory()
	const { user } = useContext(AuthContext)
	const [boards, setBoards] = useState(null)
	const [getBoards, { data, loading }] = useLazyQuery(GET_BOARDS)

	try {
		const { getBoards } = client.readQuery({ 
			query: GET_BOARDS, 
			variables: {
				user_id: user?._id
			} 
		})
			
		setBoards(getBoards)
	} catch (error) {
		console.log('err', error)
	}

	useEffect(() => {
		if(data && data.getBoards) {
			setBoards(data.getBoards)
		}
	}, [data, loading])

	useEffect(() => {
		if(user?._id && !boards) {
			getBoards({ variables: {
				user_id: user._id
			} })
		}
	}, [user])

	if (loading) return <div>loading</div>

	return (
		<>
			<CardsWrapper>
				{/* @ts-expect-error */}
				{boards?.map(
					({ _id, name }: {_id: string, name: string}) => 
						<BoardCard key={_id} onClick={() => history.push(`/board/${_id}`)}>
							{name}
						</BoardCard>
				)}
			</CardsWrapper>
		</>
	)
}

export default Boards
