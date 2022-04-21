const Router = require('express').Router()
const controller = require("../controllers/CommentController")

Router.get('/', controller.GetComments)
Router.get('/:post_id', controller.GetPostComments)

module.exports = Router