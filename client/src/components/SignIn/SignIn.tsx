import React, { useEffect, useState } from 'react'

import Modal from 'components/ui/Modal'
import useSearchParams from 'hooks/useSearchParams'
import SignInForm from './SignInForm'

const SignIn: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
  
	// @ts-expect-error
	const { signin } = useSearchParams(['signin'])
  
	useEffect(() => {
		if(signin) {
			setIsOpen(true)
		} else setIsOpen(false)
	}, [signin])
  
	const handleSubmit = () => {
    
	}
  
	return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={() => setIsOpen(false)} 
			modalStyles={{
				width: '30rem'
			}}
		>
			<SignInForm onSubmit={handleSubmit} />
		</Modal>
	)
}

export default SignIn
