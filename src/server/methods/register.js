import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

export default function () {
	Meteor.methods({
		'register'(username, password) {
			Accounts.createUser({ username, password })
			const t = Meteor.users.findOne({})
			console.log({ t })
		},
	})
}
