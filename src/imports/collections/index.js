import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

export const Users = Meteor.Users
export const Weight = new Mongo.Collection('weight')
