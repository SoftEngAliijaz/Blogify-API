const BLOGMODEL = require("../models/blog_model");

async function handleGetAllBlogs(req, res) {
  try {
    const getAllBlog = await BLOGMODEL.find({});
    if (!getAllBlog) {
      return res.status(404).json({ message: "No blogs found" });
    }
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
async function handleUpdateBlogs(req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedBlog = await BLOGMODEL.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog NOT FOUND" });
    }
    return res
      .status(200)
      .json({ message: "Updated Blog Successfully!", data: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleDeleteBlogs(req, res) {
  try {
    const { id } = req.params;
    const deletedBlog = await BLOGMODEL.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Deleted successfully!", id: id });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleGetBlogById(req, res) {
  try {
    const { id } = req.params;
    const blog = await BLOGMODEL.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res
      .status(200)
      .json({ message: "Blog fetched successfully", data: blog });
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  handleGetAllBlogs,
  handleCreateNewBlogs,
  handleUpdateBlogs,
  handleDeleteBlogs,
  handleGetBlogById,
};
