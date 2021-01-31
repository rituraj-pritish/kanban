import React, { ForwardRefRenderFunction, useImperativeHandle, useState } from 'react'

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
	items?: item[],
	placement?: string,
	children?: React.ReactNode
}

const ToggleMenu: ForwardRefRenderFunction<HTMLDivElement, Props> = ({ 
	usePosition = false, 
	items, 
	trigger, 
	placement = PLACEMENTS.RIGHT,
	children
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

	// @ts-expect-error
	useImperativeHandle(forwardedRef, () => ({
		closeMenu: () => setShowMenu(false)
	}))

	const renderMenu = () => {
		if(children) {
			return children
		} else {
			return items?.map(({ text, onClick }, idx) => 
				<div 
					onClick={(e: React.MouseEvent<HTMLElement>) => {
						e.stopPropagation()
						onClick()
						setShowMenu(false)
					}} 
					key={idx}
				>
					{text}
				</div>)
		}
	} 

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
				{renderMenu()}
			</Menu>}
		</MenuWrapper>
	)
}

const MenuWithRef = React.forwardRef(ToggleMenu)

export default MenuWithRef
