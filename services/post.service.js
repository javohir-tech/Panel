const postModel = require("../models/post.model")


class PostService {
    async getAll() {
        const allPosts = await postModel.find()
        return allPosts
    }

    async create(post) {
        const newPost = await postModel.create(post)
        return newPost
    }

    async edit(post, id) {
        const editPost = await postModel.findByIdAndUpdate(id, post, {
            new: true
        })
        return editPost
    }

    async delete(id){
        const deletePost =  await postModel.findByIdAndDelete(id)
        return deletePost
    }
}

module.exports = new PostService()