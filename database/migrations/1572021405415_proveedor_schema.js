'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorSchema extends Schema {
  up () {
    this.create('proveedors', (table) => {
      table.increments()
      table.integer('id_Producto', 20).unsigned().references('id').inTable('ferreteriaProducto')
      table.string('nombre', 50).notNullable()
      table.string('telefono', 20).notNullable().unique()
      table.string('email', 20).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedors')
  }
}

module.exports = ProveedorSchema
