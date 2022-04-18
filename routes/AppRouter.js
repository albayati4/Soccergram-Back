const Router = require('express').Router()
const AuthRouter = require('express').Router()
const UserRouter = require('express').Router()

Router.use('/auth', AuthRouter)
Router.use('/user', UserRouter)


module.exports = Router