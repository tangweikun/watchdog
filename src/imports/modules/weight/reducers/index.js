export default (state = {}, action) => {
	const { type, value, formData } = action
	switch (type) {
	case 'CHANGE_WEIGHT_VALUE':
		return {
			value,
		}
	case 'GET_WEIGHT':
		return {
			...state,
			formData,
		}
	default:
		return state
	}
}
