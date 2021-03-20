import React, { ForwardRefRenderFunction, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react'
import { PopupActions, PopupPosition } from 'reactjs-popup/dist/types'
import Popup from 'reactjs-popup'
import { MdMoreHoriz } from 'react-icons/md'

import { Menu, Trigger } from './ToggleMenu.styled'
import POSITIONS from './positions'

type Item = {
	text: string,
	onClick: () => void
}

type Props = {
  position?: PopupPosition,
  items?: Item[],
	trigger?: React.ReactNode,
	children?: React.ReactNode
}

const ToggleMenu: ForwardRefRenderFunction<HTMLDivElement, Props> = ({
	position,
	items,
	children,
	trigger,
}, forwardedRef) => {
	const [menuPosition, setPosition] = useState(POSITIONS.BOTTOM_LEFT)
	const ref = useRef<PopupActions>(null)
	const triggerRef = useRef<HTMLDivElement>(null)

	const close = () => {
		if(ref?.current) {
			ref.current.close()
		}
	}

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		close()
	}

	const setMenuPosition = () => {
		setPosition(
			// @ts-expect-error
			document.body.offsetWidth - triggerRef?.current?.offsetLeft > 170 
				? POSITIONS.BOTTOM_LEFT : POSITIONS.BOTTOM_RIGHT)
	}

	// @ts-expect-error
	useImperativeHandle(forwardedRef, () => ({
		closeMenu: close
	})) 

	const renderMenu = () => {
		if (children) {
			return children
		} else {
			return items?.map(({ text, onClick }, idx) => 
				<div
					onClick={(e: React.MouseEvent) => {
						handleClick(e)
						onClick()
					}}
					key={idx}
				>
					{text}
				</div>
			)
		}
	}

	useLayoutEffect(() => {
		setMenuPosition()
	}, [])

	return (
		<div>
			<div ref={triggerRef}/>
			<Popup
				onOpen={setMenuPosition}
				ref={ref}
				closeOnDocumentClick
				trigger={<Trigger onClick={handleClick}>
					{trigger || <MdMoreHoriz size={18} />}
				</Trigger>} 
				position={menuPosition}
			>
				<Menu>
					{renderMenu()}
				</Menu>
			</Popup>
		</div>
	)
}

const MenuWithRef = React.forwardRef(ToggleMenu)

export default MenuWithRef
