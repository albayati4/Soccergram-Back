const Router = require('express').Router()
const controller = require("../controllers/CommentController")

Router.get('/', controller.GetComments)

module.exports = Router