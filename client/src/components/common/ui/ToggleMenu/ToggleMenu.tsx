import React, { ForwardRefRenderFunction, useImperativeHandle } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import { Manager, Reference } from 'react-popper'

import { RootWrapper, Trigger } from './ToggleMenu.styled'
import MenuPopper from './MenuPopper'
import useComponentVisible from 'hooks/useComponentVisible'

type Item = {
	text: string,
	onClick: () => void
}

type Props = {
	placement?: string,
	items?: Item[],
	trigger?: React.ReactNode,
	children?: React.ReactNode
}

const ToggleMenu: ForwardRefRenderFunction<HTMLDivElement, Props> = ({
	placement = 'bottom-start',
	items,
	children,
	trigger,
}, forwardedRef) => {
	const [ref, visible, setVisibility] = useComponentVisible(false)

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setVisibility(!visible)
	}

	const onBlur = (e: React.FocusEvent) => {
		const currentTarget = e.currentTarget

		setTimeout(function () {
			if (!currentTarget.contains(document.activeElement)) {
				setVisibility(false)
			}
		}, 0)
	}

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

	// @ts-expect-error
	useImperativeHandle(forwardedRef, () => ({
		closeMenu: () => setVisibility(false)
	}))

	return (
		<RootWrapper
			onBlur={onBlur}
			onClick={() => setVisibility(false)}
			ref={ref}
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

const MenuWithRef = React.forwardRef(ToggleMenu)

export default MenuWithRef
