export default (state = {}, action) => {
	const { type, value } = action
	switch (type) {
	case 'CHANGE_WEIGHT_VALUE':
		return {
			value,
		}
	default:
		return state
	}
}
