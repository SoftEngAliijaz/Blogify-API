const mongoose = require("mongoose");

const blogModelSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    published: { type: Boolean, default: false },
    author: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    comments: [
      {
        user: { type: String, required: true },
        content: { type: String, required: true },
        votes: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

const BLOGMODEL = mongoose.model("Blog", blogModelSchema);

module.exports = BLOGMODEL;
