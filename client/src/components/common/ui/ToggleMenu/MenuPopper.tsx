import React from 'react'
import { Popper } from 'react-popper'

import { Menu } from './ToggleMenu.styled'

const passRefProp = process.env.NODE_ENV !== 'test'

type Props = {
	placement?: string,
	children: React.ReactNode
}

const MenuPopper: React.FC<Props> = ({ placement = 'bottom-start', children }) => {
	return (
	//@ts-expect-error
		<Popper
			placement={placement}
			modifiers={{
				preventOverflow: {
					boundariesElement: 'body'
				}
			}}
		>
			{({ ref, style, placement, arrowProps }) => 
			//@ts-expect-error
				<Menu ref={ref} style={style} data-placement={placement}>
					<div
						ref={passRefProp ? arrowProps.ref : undefined}
						style={arrowProps.style}
					/>
					{children}
				</Menu>
			}
		</Popper>
	)
}

export default MenuPopper