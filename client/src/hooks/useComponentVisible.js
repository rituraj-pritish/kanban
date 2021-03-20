import { useState, useEffect, useRef } from 'react'

export default (initialIsVisible, exception) => {
	const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
	const ref = useRef(null)

	const handleClickOutside = event => {
		if (exception?.current?.contains(event.target)) return
		
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return [ ref, isComponentVisible, setIsComponentVisible ]
}