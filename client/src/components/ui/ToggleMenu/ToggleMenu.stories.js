import React from 'react'

import ToggleMenu from './Toggle'

export default { title: 'ToggleMenu' }

export const ChildView = () => {
	return (
		<div style={{ marginLeft: '10rem' }}>
			<ToggleMenu>
				<div>Item 1</div>
				<div>Item 2</div>
			</ToggleMenu> 
		</div>
	)
}

export const PropView = () => {
	return (
		<div style={{ marginLeft: '10rem' }}>
			<ToggleMenu
				items={[
					{ text: 'Item 1', onClick: () => {} }
				]}
			/> 
		</div>
	)
}
