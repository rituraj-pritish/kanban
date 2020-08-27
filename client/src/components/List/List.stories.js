import React from 'react'
import List from './index'

export default { title: 'List' }

export const withDefaultView = () => <List 
	title='List Title'
	id='list'
	list={[
		{ title: 'Title 1', id: '1' },
		{ title: 'Title 2', id: '2' },
		{ title: 'Title 3', id: '3' },
		{ title: 'Title 4', id: '4' }
	]} />
