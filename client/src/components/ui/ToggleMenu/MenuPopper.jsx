import React from 'react'
import { Popper } from 'react-popper'

import { Menu } from './ToggleMenu.styled'

const passRefProp = process.env.NODE_ENV !== 'test'

export default function MenuPopper({ placement = 'bottom-start', children }) {
	return (
		<Popper
			placement={placement}
			modifiers={{
				preventOverflow: {
					boundariesElement: 'body'
				}
			}}
		>
			{({ ref, style, placement, arrowProps }) => 
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
