const { Router } = require('express')
const UserController = require('../Controllers/UserController')
const SessionController = require('../Controllers/SessionController')
const ProductController = require('../Controllers/ProductController')
const routes = Router()

routes.post('/user', UserController.create)
routes.get('/user/', UserController.index)
routes.delete('/user/:user_id', UserController.delete)
routes.get('/user/:user_id', UserController.findUser)
routes.post('/:user_id/product', ProductController.create)
routes.delete('/:user_id/product/:product_id', ProductController.delete)
routes.get('/product/cords', ProductController.indexCords)
routes.get('/product', ProductController.indexAll)
routes.post('/session', SessionController.create)
routes.get('/product/:user_id', ProductController.indexByUser)
routes.get('/product/this/:product_id', ProductController.indexProd)
    
module.exports = routes

module.exports = routes
