import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Modal from 'components/ui/Modal'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'

const SIGN_IN = 'signin'
const SIGN_UP = 'signup'

const AuthModal: React.FC = () => {
	const history = useHistory()
	const [isOpen, setIsOpen] = useState<boolean>(false)
	
	
	const [currentForm, setCurrentForm] = useState<string>('')

	useEffect(() => {
		window.addEventListener('click', () => {
			const search = document.location.search
			console.log('click')

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
				width: '30rem'
			}}
		>
			{currentForm === SIGN_IN 
				? <SignIn /> 
				: <SignUp />
			}
		</Modal>
	)
}

export default AuthModal
