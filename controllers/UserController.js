const { User } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: ['firstName', 'lastName', 'email']
        })
        console.log('getting user')
        res.send(user)
    } catch (error) {
        throw error
    }
}

const GetUserFollowing = async (req, res) => {
    try {
        const list = await User.findAll({
            attributes: ['firstName', 'lastName'],
            include: [{
                model: User,
                as: 'following',
                through: { attributes: [] },
                attributes: ['firstName', 'lastName']
            }],
            where: {
                id: req.params.user_id
            }
        })
        console.log('users I follow')
        res.send(list)
    } catch (error) {
        throw error
    }
}

const GetUserFollowers = async (req, res) => {
    try {
        const list = await User.findAll({
            attributes: ['id', 'firstName', 'lastName'],
            include: [{
                model: User,
                as: 'followers',
                through: { attributes: [] },
                attributes: ['firstName', 'lastName']
            }],
            where: {
                id: req.params.user_id
            }
        })
        console.log('my followers')
        res.send(list)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetUsers,
    GetUserFollowing,
    GetUserFollowers
}