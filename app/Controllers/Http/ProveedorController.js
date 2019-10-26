'use strict'
const Proveedor = use('App/Models/Proveedor')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proveedors
 */
class ProveedorController {
  /**
   * Show a list of all proveedors.
   * GET proveedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let proveedor = await Proveedor.query().with('ferreteriaProducto').fetch();
    
    return response.json(proveedor.toJSON());
  }

  /**
   * Render a form to be used for creating a new proveedor.
   * GET proveedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let proveedor = await Proveedor.all();
    
    return view.render('proveedor.create', { proveedor: proveedor.toJSON() });
  }

  /**
   * Create/save a new proveedor.
   * POST proveedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Proveedor.create(request.all());

    return response.json('Proveedor ha sido creado');
  }

  /**
   * Display a single proveedor.
   * GET proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing proveedor.
   * GET proveedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let proveedor = await Proveedor.find(params.id);
    
    return view.render('proveedor.edit', { proveedor: proveedor.toJSON() });
  }

  /**
   * Update proveedor details.
   * PUT or PATCH proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let proveedor = await Proveedor.find(params.id);
    proveedor.merge(request.all());
    
    
    await proveedor.save();
    return response.json('Proveedor ha sido editado');
  }

  /**
   * Delete a proveedor with id.
   * DELETE proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let proveedor = await Proveedor.find(params.id);
    
    proveedor.delete();
    return response.json('Proveedor ha sido eliminado');
  }
}

module.exports = ProveedorController
