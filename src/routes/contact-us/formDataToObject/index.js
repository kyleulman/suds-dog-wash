export function formDataToObject(raw) {
	let body = {}

	const keys = [...raw.keys()]
	keys.forEach((key) => (body[key] = raw.get(key)))

	return body
}
