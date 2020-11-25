import React, { forwardRef, useImperativeHandle, useState } from 'react'

import useComponentVisible from 'hooks/useComponentVisible'
import { Trigger, MenuWrapper, Menu, TriggerWrapper } from './ToggleMenu.styled'
import PLACEMENTS from 'constants/placements'

interface item {
	text: string,
	onClick: () => void
}

interface Props {
	usePosition?: boolean, 
	trigger?: React.ReactNode,
	items: item[],
	placement?: string
}

const ToggleMenu: React.FC<Props & React.RefAttributes<HTMLDivElement>> = forwardRef(({ 
	usePosition = false, 
	items, 
	trigger, 
	placement = PLACEMENTS.RIGHT
}, forwardedRef) => {
	const [ref, showMenu, setShowMenu] = useComponentVisible(false)
	const [position, setPosition] = useState<number[] | null>(null)

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		setShowMenu(true)

		if(usePosition) {
			setPosition([e.screenX, e.screenY])
		}
	}

	//@ts-expect-error
	useImperativeHandle(forwardedRef, () => ({
		closeMenu() {
			setShowMenu(false)
		}
	}))

	return (
		<MenuWrapper 
			usePosition={usePosition} 
		>
			{trigger 
				?<TriggerWrapper onClick={handleClick}>{trigger}</TriggerWrapper> 
			 :<Trigger  onClick={handleClick}>
			 	<span/><span/><span/>
			 </Trigger>
			}
			 
			{showMenu &&
			<Menu 
				ref={ref} 
				placement={placement} 
				position={position}
			>
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
})

export default ToggleMenu
