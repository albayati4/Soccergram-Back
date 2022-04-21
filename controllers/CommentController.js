const { Comment } = require('../models')

const GetComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            attributes: ['body', 'likes'],
            order: [['updatedAt', 'DESC']]
        })
        res.send(comments)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetComments
}