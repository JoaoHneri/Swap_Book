const { Router } = require('express')
const UserController = require('../Controllers/UserController')
const SessionController = require('../Controllers/SessionController')
const ProductController = require('../Controllers/ProductController')
const multer = require('multer');
const routes = Router()


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

routes.post('/user', UserController.create)
routes.post('/:user_id/product', upload.single('src'), ProductController.create)
routes.get('/user/', UserController.index)
routes.delete('/user/:user_id', UserController.delete)
routes.get('/user/:user_id', UserController.findUser)
routes.delete('/:user_id/product/:product_id', ProductController.delete)
routes.get('/product/cords', ProductController.indexCords)
routes.get('/product', ProductController.indexAll)
routes.post('/session', SessionController.create)
routes.get('/product/:user_id', ProductController.indexByUser)
routes.get('/product/this/:product_id', ProductController.indexProd)
    
module.exports = routes

