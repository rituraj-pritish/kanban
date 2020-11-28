import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/Logo.svg' 
import Modal from 'components/ui/Modal'
import SignIn from 'components/authentication/SignIn'
import SignUp from 'components/authentication/SignUp'
import { LogoWrapper } from './AuthModal.styled'

const SIGN_IN = 'signin'
const SIGN_UP = 'signup'

const AuthModal: React.FC = () => {
	const history = useHistory()
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [currentForm, setCurrentForm] = useState<string>('')

	useEffect(() => {
		window.addEventListener('click', () => {
			const search = document.location.search

			// todo find a better solution
			const auth = search.slice(6, search.length)

			if(auth === SIGN_UP || auth === SIGN_IN ) {
				setIsOpen(true)
				setCurrentForm(auth)
			}
		})
	}, [])

	const onRequestClose = () => {
		setIsOpen(false)
		history.push(document.location.pathname)
	}

	return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose} 
			modalStyles={{
				width: '30rem',
				height: 'fit-content'
			}}
		>
			<LogoWrapper><Logo/></LogoWrapper>
			{currentForm === SIGN_IN 
				? <SignIn closeAuthModal={() => setIsOpen(false)} /> 
				: <SignUp closeAuthModal={() => setIsOpen(false)} />
			}
		</Modal>
	)
}

export default AuthModal