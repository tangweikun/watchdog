export const changeValue = (value) => ({
	type: 'CHANGE_WEIGHT_VALUE',
	value,
})

export const saveWeight = () =>
  (dispatch, getState, { Meteor }) => {
	const { value } = getState().weight
	Meteor.call('weight.save', value)
}
