'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FerreteriaProductoSchema extends Schema {
  up () {
    this.create('ferreteria_productos', (table) => {
      table.increments()
      table.string('nombreProducto', 50).notNullable();
      table.string('marcaProducto', 20).notNullable();
      table.integer('precioProducto', 10).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('ferreteria_productos')
  }
}

module.exports = FerreteriaProductoSchema
