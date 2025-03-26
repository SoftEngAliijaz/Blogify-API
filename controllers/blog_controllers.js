const BLOGMODEL = require("../models/blog_model");

async function handleGetAllBlogs(req, res) {
  try {
    const getAllBlog = await BLOGMODEL.find({});
    return res
      .status(200)
      .json({ message: "Fetched all blogs Successfully", data: getAllBlog });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleCreateNewBlogs(req, res) {
  try {
    const { title, slug, published, author, content, tags } = req.body;
    if (!title || !slug || !author || !content) {
      return res.status(400).json({
        message: "All fields except 'published' and 'tags' are required",
      });
    }

    const createNewBlog = await BLOGMODEL.create({
      title,
      slug,
      published,
      author,
      content,
      tags,
    });
    return res
      .status(201)
      .json({ message: "Successfully added new blog", data: createNewBlog });
  } catch (error) {
    console.error("Error Creating Blogs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
async function handleUpdateBlogs(params) {}
async function handleDeleteBlogs(params) {}

module.exports = {
  handleGetAllBlogs,
  handleCreateNewBlogs,
  handleUpdateBlogs,
  handleDeleteBlogs,
};
