import React from 'react'
import Avatar from './index'

export default { title: 'Avatar' }

export const Views = () => {
	return (
		<div style={{
			display: 'flex'
		}}>
			<Avatar
				user={{
					bg_color: 'magenta',
					first_name: 'John',
					last_name: 'Doe',
				}}
			/>

			<Avatar
				user={{
					bg_color: 'magenta',
					first_name: 'John',
					last_name: 'Doe',
					is_admin: true,
					avatar_url: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
				}}
			/>
		</div>
	)}
