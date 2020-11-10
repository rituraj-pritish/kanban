import React, { useContext, useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { HiViewBoards } from 'react-icons/hi'
import { IoMdSettings } from 'react-icons/io'

import CollapseButton from './CollapseButton'
import Avatar from 'components/Avatar'
import { Divider, SidebarWrapper, UserDetails } from './Sidebar.styled'
import AuthContext from 'contexts/auth/AuthContext'
import SidebarLink from './SidebarLink'

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

	const links = [
		{
			text: 'Dashboard' ,
			link: '/dashboard' ,
			icon: <MdDashboard/>
		},
		{
			text: 'Boards' ,
			link: '/boards' ,
			icon: <HiViewBoards/>
		},
		{
			text: 'Settings' ,
			link: '/settings' ,
			icon: <IoMdSettings/>
		}
	]
	
	return (
		<SidebarWrapper isCollapsed={isCollapsed}>

			<UserDetails isCollapsed={isCollapsed}>
				{/* <ToggleMenu 
					trigger={<Avatar user={user || mock}/>}
					placement={PLACEMENTS.LEFT}
					items={[
						{ text: 'Sign Out', onClick: signOut }
					]}
				/> */}
				<Avatar size={35} user={user || mock}/>
				<div>
					{user?.name}
				</div>
			</UserDetails>
			<Divider/>

			{links.map((item, idx) => <SidebarLink key={idx} {...item} />)}
			
			<CollapseButton 
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
			/>
		</SidebarWrapper>
	)
}

export default Sidebar
