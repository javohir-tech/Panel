const postModel = require("../models/post.model")


class PostService {
    async getAll() {
        const allPosts = await postModel.find()
        return allPosts
    }

    async create(post){
        const newPost = await postModel.create(post)
        return newPost
    }
}

module.exports = new PostService()