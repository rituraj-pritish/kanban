import React, { useContext, useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { HiViewBoards } from 'react-icons/hi'
import { IoMdSettings } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import { ReactComponent as Logo } from 'assets/Logo.svg' 
import CollapseButton from './CollapseButton'
import Avatar from 'components/Avatar'
import { Divider, SidebarWrapper, UserDetails, LogoWrapper } from './Sidebar.styled'
import AuthContext from 'contexts/auth/AuthContext'
import SidebarLink from './SidebarLink'
import { FlexGrow } from 'components/CommonStyles'
import IconButton from 'components/ui/IconButton'

const Sidebar: React.FC = () => {
	const history = useHistory()
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
		<SidebarWrapper isCollapsed={isCollapsed} data-testid='sidebar'>

			<LogoWrapper>
				<Logo onClick={() => history.push('/dashboard')} />
				<div>
					KanBan
				</div>
			</LogoWrapper>
			<Divider/>

			{links.map((item, idx) => <SidebarLink key={idx} {...item} />)}

			<FlexGrow/>

			<div>
				<IconButton icon={<FiLogOut/>} onClick={signOut} />
				<UserDetails isCollapsed={isCollapsed}>
					<Avatar user={user} size={35}/>
					<div>
						{user?.name}
					</div>
				</UserDetails>
			</div>
			
			<CollapseButton 
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
			/>
		</SidebarWrapper>
	)
}

export default Sidebar
