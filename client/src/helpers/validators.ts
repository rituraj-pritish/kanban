export const required = (value: any) => {
	if(!value) return 'This field is required.'
}

export const password = (value: string) => {
	if(!value) return 'This field is required.'
	if(value.length <= 6) return 'Password must be greater than 6 characters.'
}

export const matchPassword = (value: string) => (password: string) => {
	if(!value) return 'This field is required.'
	if(value !== password) return 'Passwords do not match.'
}