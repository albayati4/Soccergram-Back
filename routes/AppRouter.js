const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')

Router.use('/auth', AuthRouter)
Router.use('/user', UserRouter)
Router.use('/post', PostRouter)


module.exports = Router