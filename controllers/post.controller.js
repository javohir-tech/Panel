const postService = require("../services/post.service")


class PostController {
    async getAll(req, res) {
        try {
            const allPosts = await postService.getAll()
            res.status(200).json(allPosts)
        } catch (error) {
            res.status(500).json(`get all posts error : ${error}`)
        }
    }

    async create(req, res) {
        try {
            const post = await postService.create(req.body)
            res.status(201).json(post)
        } catch (error) {
            res.status(500).json(`create post error : ${error}`)
        }
    }

    async edit(req, res) {
        try {
            const putPost = await postService.edit(req.body, req.params.id)
            if (!putPost) {
                return res.status(200).json({ message: "post not found" })
            }
            res.status(200).json({ message: "successfully edit", putPost })
        } catch (error) {
            res.status(500).json(`put post error: ${error}`)
        }
    }
}

module.exports = new PostController()