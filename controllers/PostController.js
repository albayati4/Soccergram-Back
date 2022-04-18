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
        const post = await Post.create({ ...req.body })
        res.send(post)
    } catch (error) {
        throw error
    }
}




// finish logic
// const GetPostsByDesc = async (req, res) => {
//     try {
//         const posts = await Post.findAll({
//             where: {

//             }
//         })
//     } catch (error) {

//     }
// }


module.exports = {
    GetPosts,
}