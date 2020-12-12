'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatUserSchema extends Schema {
  up () {
    this.create('chat_user', (table) => {
      table.increments()
      table.integer('chat_id').unsigned().references('id').inTable('chats')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.boolean('isAdmin').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('chat_user')
  }
}

module.exports = ChatUserSchema
