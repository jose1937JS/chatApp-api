'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {

	user() {
		return this.hasOne('App/Models/User')
	}

	chat() {
		return this.hasOne('App/Models/Chat')
	}

}

module.exports = Message
