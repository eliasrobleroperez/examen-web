'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('ferreteriaProductos', 'ProductoController.index')
Route.get('ferreteriaProductos/crear', 'ProductoController.create')
Route.post('ferreteriaProductos/crear', 'ProductoController.store')
Route.get('ferreteriaProductos/editar/:id', 'ProductoController.edit')
Route.post('ferreteriaProductos/editar/:id', 'ProductoController.update')
Route.get('ferreteriaProductos/eliminar/:id', 'ProductoController.destroy')

Route.get('inventario', 'InventarioController.index')
Route.get('inventario/crear', 'InventarioController.create')
Route.post('inventario/crear', 'InventarioController.store')
Route.get('inventario/editar/:id', 'InventarioController.edit')
Route.post('inventario/editar/:id', 'InventarioController.update')
Route.get('inventario/eliminar/:id', 'InventarioController.destroy')

Route.get('proveedor', 'ProveedorController.index')
Route.get('proveedor/crear', 'ProveedorController.create')
Route.post('proveedor/crear', 'ProveedorController.store')
Route.get('proveedor/editar/:id', 'ProveedorController.edit')
Route.post('proveedor/editar/:id', 'ProveedorController.update')
Route.get('proveedor/eliminar/:id', 'ProveedorController.destroy')
