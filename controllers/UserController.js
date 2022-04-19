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

const GetUserFollowing = async (req, res) => {
    try {
        const list = await User.findAll({
            include: [{
                model: User,
                as: 'following',
                through: { attributes: [] }
            }]
        })
        console.log('getting followers')
        res.send(list)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetUsers,
    GetUserFollowing
}