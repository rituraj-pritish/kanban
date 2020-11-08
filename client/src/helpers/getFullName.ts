export default (firstName: string, lastName: string): string => {
	return firstName[0].toUpperCase() + firstName.slice(1, firstName.length)
    + lastName[0].toUpperCase() + lastName.slice(1, lastName.length)
}