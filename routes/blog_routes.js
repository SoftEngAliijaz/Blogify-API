const {
  handleGetAllBlogs,
  handleCreateNewBlogs,
  handleUpdateBlogs,
  handleDeleteBlogs,
  handleGetBlogById,
} = require("../controllers/blog_controllers");
const express = require("express");
const router = express.Router();

/// The following code is equivalent to the code below:
router.route("/").get(handleGetAllBlogs).post(handleCreateNewBlogs);
router
  .route("/:id")
  .get(handleGetBlogById)
  .put(handleUpdateBlogs)
  .delete(handleDeleteBlogs);

/// The above code is equivalent to the following code:
// router.post("/", handleCreateNewBlogs);
// router.get("/", handleGetAllBlogs);
// router.get("/:id", handleGetBlogById);
// router.put("/:id", handleUpdateBlogs);
// router.delete("/:id", handleDeleteBlogs);

module.exports = router;
