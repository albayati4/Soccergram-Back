const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetPosts)
Router.get('/user_feed/:user_id', controller.GetUserPosts)
Router.post('/', controller.CreatePost)
Router.put('/:post_id', controller.UpdatePost)
Router.delete('/:post_id', controller.DeletePost)
Router.delete('/:post_id/:user_id', controller.DeletePostByUserId)

module.exports = Router