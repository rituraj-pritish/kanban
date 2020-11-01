import React from 'react'

import useComponentVisible from 'hooks/useComponentVisible'
import { Trigger, MenuWrapper, Menu } from './ToggleMenu.styled'
import PLACEMENTS from 'constants/placements'

interface item {
	text: string,
	onClick: () => void
}

interface Props {
	trigger?: React.ReactNode,
	items: item[],
	placement?: string
}

const ToggleMenu: React.FC<Props> = ({ items, trigger, placement = PLACEMENTS.RIGHT }) => {
	const [ref, showMenu, setShowMenu] = useComponentVisible(false)
	
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		setShowMenu(true)
	}
	
	return (
		<MenuWrapper onMouseLeave={() => setShowMenu(false)}>
			{trigger 
				?<div onClick={handleClick}>{trigger}</div> 
			 :<Trigger onClick={handleClick}>
			 	<span/><span/><span/>
			 </Trigger>
			}
			 
			{showMenu &&
			<Menu ref={ref} placement={placement}>
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
