export default (keys: string[]): { [x: string]: string } => {
	const params = new URLSearchParams(window.location.search)

	const returnParams: { [s: string]: string} = {}
	keys.forEach((key: string) => returnParams[key] = params.get(key) || '')

	return returnParams
}