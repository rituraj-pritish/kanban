import React, { useContext, useState } from 'react'
import CollapseButton from './CollapseButton'

import Avatar from 'components/Avatar'
import ToggleMenu from 'components/ui/ToggleMenu'
import PLACEMENTS from 'constants/placements'
import { Divider, SidebarWrapper, UserDetails } from './Sidebar.styled'
import AuthContext from 'contexts/auth/AuthContext'

const mock = {
	first_name: '',
	last_name: '',
	avatar_bg_color: '',
	is_admin: false,
	name: ''
}

const Sidebar: React.FC = () => {
	const isSidebarCollapsed = window.localStorage.getItem('isCollapsed')
	const [isCollapsed, setIsCollapsed] = useState(isSidebarCollapsed ? true : false)
	const { user, signOut } = useContext(AuthContext)
	
	return (
		<SidebarWrapper isCollapsed={isCollapsed}>

			<UserDetails>
				{/* <ToggleMenu 
					trigger={<Avatar user={user || mock}/>}
					placement={PLACEMENTS.LEFT}
					items={[
						{ text: 'Sign Out', onClick: signOut }
					]}
				/> */}
				<Avatar user={user || mock}/>
				<div>
					{user?.name}
				</div>
			</UserDetails>
			<Divider/>
			
			<CollapseButton 
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
			/>
		</SidebarWrapper>
	)
}

export default Sidebar
