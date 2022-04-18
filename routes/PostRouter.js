const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get('/', controller.GetPosts)
Router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreatePost
)

Router.put(
    '/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdatePost
)

Router.delete(
    '/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeletePost
)

module.exports = Router