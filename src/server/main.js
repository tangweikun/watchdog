import { Meteor } from 'meteor/meteor'
import methods from './methods'

Meteor.startup(() => {
	methods()
})
