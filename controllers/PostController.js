const { Post } = require('../models')

const GetPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.send(posts)
    } catch (error) {
        throw error
    }
}


const CreatePost = async (req, res) => {
    try {
        let buildBody = {
            ...req.body
        }
        const post = await Post.create(buildBody)
        res.send(post)
    } catch (error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        let postId = parseInt(req.params.postId)
        const updatePost = await Post.update(req.body, {
            where: { id: postId },
            returning: true
        })
        res.send(updatePost)
    } catch (error) {
        throw error
    }
}

// delete post by id
const DeletePost = async (req, res) => {
    try {
        const postId = req.params.id
        const deletedPost = await postModel.findByIdAndDelete(postId)
        res.send(deletedPost, { message: `Post ${postId} was deleted` })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}

// const DeletePost = async (req, res) => {
//     try {

//         let postId = parseInt(req.params.postId)
//         await Post.destroy({ where: { id: postId } })
//         res.send({ message: `Post ${postId} was deleted` })
//     } catch (error) {
//         throw error
//     }
// }


module.exports = {
    GetPosts,
    CreatePost,
    UpdatePost,
    DeletePost
}