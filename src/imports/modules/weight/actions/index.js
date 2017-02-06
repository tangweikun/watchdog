export const changeValue = (value) => ({
	type: 'CHANGE_WEIGHT_VALUE',
	value,
})

export const saveWeight = () =>
  (dispatch, getState, { Meteor }) => {
	const { value } = getState().weight
	Meteor.call('weight.save', value)
}

export const getWeight = () =>
  (dispatch, getState, { Meteor }) => {
	Meteor.call('weight.get', (err, formData) => {
		dispatch({
			type: 'GET_WEIGHT',
			formData,
		})
	})
}
