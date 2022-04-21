const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('/CommentRouter')
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')

Router.use('/auth', AuthRouter)
Router.use('/comment', CommentRouter)
Router.use('/post', PostRouter)
Router.use('/user', UserRouter)


module.exports = Router