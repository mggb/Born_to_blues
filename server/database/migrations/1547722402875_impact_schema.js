'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImpactSchema extends Schema {
  up () {
    this.create('impacts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('impacts')
  }
}

module.exports = ImpactSchema
