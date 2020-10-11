export default keys => {
	const params = new URL(document.location).searchParams

	const returnParams = {}
	keys.forEach(key => returnParams[key] = params.get(key) )

	return returnParams
}