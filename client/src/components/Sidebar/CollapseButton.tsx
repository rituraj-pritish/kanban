import React, { useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import IconButton from 'components/ui/IconButton'
import { CollapseButtonWrapper } from './Sidebar.styled'

type Props = {
  isCollapsed: boolean,
  setIsCollapsed: (state: boolean) => void
}

const CollapseButton: React.FC<Props> = ({
	isCollapsed,
	setIsCollapsed
}) => {
	useEffect(() => {
		if(isCollapsed) {
			window.localStorage.setItem('isCollapsed', 'true')
		} else {
			window.localStorage.removeItem('isCollapsed')
		}
	}, [isCollapsed])
  
	return (
		<CollapseButtonWrapper isCollapsed={isCollapsed}>
			<IconButton 
				isCircular
				icon={isCollapsed ? <FiChevronRight/> : <FiChevronLeft/>}
				onClick={() => isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)}
			/>
		</CollapseButtonWrapper>
	)
}

export default CollapseButton
