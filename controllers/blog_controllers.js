const BLOGMODEL = require("../models/blog_model");

async function handleGetAllBlogs(req, res) {
  try {
    const getAllBlog = await BLOGMODEL.find({});
    return res.status(200).json(getAllBlog);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleCreateNewBlogs(params) {}
async function handleUpdateBlogs(params) {}
async function handleDeleteBlogs(params) {}

module.exports = {
  handleGetAllBlogs,
  handleCreateNewBlogs,
  handleUpdateBlogs,
  handleDeleteBlogs,
};
