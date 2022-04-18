const { User } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const user = await User.findAll()
        console.log('getting user')
        res.send(user)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetUsers
}