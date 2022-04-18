const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')

Router.use('/auth', AuthRouter)
Router.use('/user', UserRouter)


module.exports = Router