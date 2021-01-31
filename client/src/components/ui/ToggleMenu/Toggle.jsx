import React, { useEffect, useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import { Manager, Reference } from 'react-popper'

import { RootWrapper, Trigger } from './ToggleMenu.styled'
import MenuPopper from './MenuPopper'

const ToggleMenu = ({
	placement = 'bottom-start',
	items,
	closeMenu,
	children,
	trigger,
	isPrimaryList,
	className
}) => {
	// const { opened, handleClick, onBlur, setVisibility } = useToggleActions()
	const [visible, setVisibility] = useState(false)

	const handleClick = e => {
		e.preventDefault()
		e.stopPropagation()
		setVisibility(!visible)
	}

	const onBlur = e => {
		const currentTarget = e.currentTarget

		setTimeout(function () {
			if (!currentTarget.contains(document.activeElement)) {
				setVisibility(false)
			}
		}, 0)
	}

	useEffect(() => {
		if (closeMenu) {
			setVisibility(false)
		}
	}, [closeMenu, setVisibility])

	const renderMenu = () => {
		if (children) {
			return children
		} else {
			return items?.map(({ text, onClick }, idx) => 
				<div
					onClick={e => {
						handleClick()
						onClick()
					}}
					key={idx}
				>
					{text}
				</div>
			)
		}
	}

	return (
		<RootWrapper
			className={className}
			onBlur={onBlur}
			tabIndex={1}
			isPrimaryList={isPrimaryList}
			onClick={() => setVisibility(false)}
		>
			<Manager>
				<Reference>
					{({ ref }) => 
						<Trigger ref={ref} onClick={handleClick}>
							{trigger || <MdMoreHoriz size={18} />}
						</Trigger>
					}
				</Reference>
				{visible && 
          <MenuPopper placement={placement}>{renderMenu()}</MenuPopper>
				}
			</Manager>
		</RootWrapper>
	)
}

export default ToggleMenu
