import { Meteor } from 'meteor/meteor'
import { Weight } from '../../imports/collections'

export default function () {
	Meteor.methods({
		'weight.save'(weight) {
			Weight.insert({ weight, userId: Meteor.userId(), createdAt: new Date() })
		},
		'weight.get'() {
			return Weight.find({ userId: Meteor.userId() }).fetch()
		},
	})
}
