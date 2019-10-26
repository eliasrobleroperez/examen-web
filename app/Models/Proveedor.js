'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proveedor extends Model {
    ferreteriaProducto() {
        return this.belongsTo('App/Models/Producto', 'id_Producto')
    }
}

module.exports = Proveedor
