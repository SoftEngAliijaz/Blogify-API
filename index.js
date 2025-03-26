const express = require("express");
const configureDatabase = require("./config");
const router = require("./routes/blog_routes");
const app = express();
const PORT = process.env.PORT || 3000;

/// Configure database
configureDatabase("mongodb://localhost:27017/blogify-api");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/blogs", router);

/// Listen to port
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
