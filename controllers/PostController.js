const { Post } = require('../models')

const GetPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.send(posts)
    } catch (error) {
        throw error
    }
}


// const CreatePost = async (req, res) => {
//     const newPost = await Post.create
//  req.send(body)
// }



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