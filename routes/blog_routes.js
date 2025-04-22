const { Router } = require("express");
const Blog = require("../models/blog_model");
const router = Router();

router.get("/add-new-blog", (req, res) => {
  return res.render("add_blog", {
    user: req.user,
  });
});

router.post("/add-new-blog", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: "Success!",
    status: 200,
    data: req.body,
  });
});

module.exports = router;
