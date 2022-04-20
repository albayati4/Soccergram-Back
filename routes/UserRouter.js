const Router = require('express').Router()
const controller = require('../controllers/UserController')


Router.get('/', controller.GetUsers)
Router.get('/profile/:user_id', controller.GetProfile)
Router.get('/:user_id/following', controller.GetUserFollowing)
Router.get('/:user_id/followers', controller.GetUserFollowers)


module.exports = Router