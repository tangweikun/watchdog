import { Meteor } from 'meteor/meteor'
import { Weight } from '../../imports/collections'

export default function () {
	Meteor.methods({
		'weight.save'(weight) {
			console.log('--->')
			Weight.insert({ weight })
			const t = Weight.findOne({})
			console.log({ t })
		},
	})
}
