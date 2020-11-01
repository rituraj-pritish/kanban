export default (id: string) => {
	document.getElementById(id)?.dispatchEvent(new Event('submit'))
}
