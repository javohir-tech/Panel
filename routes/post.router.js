const express = require("express")
const postController = require("../controllers/post.controller")

const router = express.Router()

router.get("/get", postController.getAll)
router.post("/create", postController.create)
router.put("/edit/:id", postController.edit)

module.exports = router