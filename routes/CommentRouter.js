const Router = require('express').Router()
const controller = require("../controllers/CommentController")

Router.get('/', controller.GetComments)
Router.get('/:post_id', controller.GetPostComments)
Router.post('/:post_id/user_id/add_comment', controller.AddComment)

module.exports = Router