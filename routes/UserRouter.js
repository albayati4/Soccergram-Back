const Router = require('express').Router()
const controller = ('../controllers/UserController')

Router.get('/', controller.User)


module.exports = Router