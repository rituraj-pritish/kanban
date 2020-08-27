import React from 'react'
import Board from './index'

export default { title: 'Board' }

export const withDefaultVIew = () => <Board 
	id='board'
	lists={[
		{	
			title: 'List 1',
			id: 'list-1',
			cards: [{ title: 'a', id: 'a' }, { title: 'b', id: 'b' }]
		},
		// {	
		// 	title: 'List 2',
		// 	id: 'list-2',
		// 	cards: [{ title: 'c', id: 'c' }, { title: 'd', id: 'd' }]
		// },
		// {	
		// 	title: 'List 3',
		// 	id: 'list-3',
		// 	cards: [{ title: 'e', id: 'e' }, { title: 'f', id: 'f' }, { title: 'z', id: 'z' }]
		// }
	]}
/>