'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicStyleSchema extends Schema {
  up () {
    this.create('music_styles', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('music_styles')
  }
}

module.exports = MusicStyleSchema
