'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.integer('idProducto', 10).unsigned().references('id').inTable('ferreteriaProducto')
      table.integer('stock', 10).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventarioSchema
