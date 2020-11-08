import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import IconButton from 'components/ui/IconButton'
import { CollapseButton, SidebarWrapper } from './Sidebar.styled'

const Sidebar: React.FC = () => {
	const isSidebarCollapsed = window.localStorage.getItem('isCollapsed')
	const [isCollapsed, setIsCollapsed] = useState(isSidebarCollapsed ? true : false)

	useEffect(() => {
		if(isCollapsed) {
			window.localStorage.setItem('isCollapsed', 'true')
		} else {
			window.localStorage.removeItem('isCollapsed')
		}
	}, [isCollapsed])
	
	return (
		<SidebarWrapper isCollapsed={isCollapsed}>
      Sidebar
			<CollapseButton isCollapsed={isCollapsed}>
				<IconButton 
					icon={isCollapsed ? <FiChevronRight/> : <FiChevronLeft/>}
					onClick={() => isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)}
				/>
			</CollapseButton>
		</SidebarWrapper>
	)
}

export default Sidebar
