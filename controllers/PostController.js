const { Posts } = require('../models')

const GetPosts = async (req, res) => {
    try {
        const allPosts = await Posts.findAll({
            attributes: ['title', 'body'],
            order: [['updatedAt', 'DESC']]
        })
        res.send(allPosts)
    } catch (error) {
        throw error
    }
}

const GetUserPosts = async (req, res) => {
    try {
        const userPosts = await Posts.findAll({
            attributes: ['title', 'body'],
            order: [['createdAt', 'DESC']],
            where: {
                user_id: req.params.user_id
            }
        })
        res.send(userPosts)
    } catch (error) {
        throw error
    }
}
const CreatePost = async (req, res) => {
    try {
        let buildBody = {
            ...req.body
        }
        const createPost = await Posts.create(buildBody)
        res.send(createPost)
    } catch (error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        let postId = parseInt(req.params.post_id)
        const updatePost = await Posts.update(req.body, {
            where: { id: postId },
            returning: true
        })
        res.send(updatePost)
    } catch (error) {
        throw error
    }
}

const DeletePost = async (req, res) => {
    try {

        let postId = parseInt(req.params.post_id)
        await Posts.destroy({ where: { id: postId } })
        res.send({ message: `Your post, ${postId}, was deleted` })
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetPosts,
    GetUserPosts,
    CreatePost,
    UpdatePost,
    DeletePost
}