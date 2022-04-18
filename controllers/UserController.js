const { User } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const user = await User.findAll()
        res.send(user)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetUsers
}