import React from 'react'

import useComponentVisible from 'hooks/useComponentVisible'
import { Trigger, MenuWrapper, Menu } from './ToggleMenu.styled'

interface item {
	text: string,
	onClick: () => void
}

interface Props {
	items: item[]
}

const ToggleMenu: React.FC<Props> = ({ items }) => {
	const [ref, showMenu, setShowMenu] = useComponentVisible(false)
	
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		setShowMenu(true)
	}
	
	return (
		<MenuWrapper>
			<Trigger onClick={handleClick}>
				<span/><span/><span/>
			</Trigger>
			{showMenu &&
			<Menu ref={ref}>
				{items.map(({ text, onClick }, idx) => 
					<div 
						onClick={(e: React.MouseEvent<HTMLElement>) => {
							e.stopPropagation()
							onClick()
							setShowMenu(false)
						}} 
						key={idx}
					>
						{text}
					</div>)}
			</Menu>}
		</MenuWrapper>
	)
}

export default ToggleMenu
