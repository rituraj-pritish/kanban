import jwtDecode from 'jwt-decode'

type MyToken = {
  id: string,
	exp: number,
	iat: number
}

const handleError = () => {
	localStorage.removeItem('auth_token')
	window.location.href = '/'
}

export default (): undefined => {
	const authToken = localStorage.getItem('auth_token')

	if (!authToken) return
	
	try {
		const exp = jwtDecode<MyToken>(authToken).exp
		const isExpired = exp < new Date().getTime() / 1000

		if (isExpired) handleError()	
	} catch (err) {
		handleError()
	}

}
