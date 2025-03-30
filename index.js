const express = require("express");
const configureDatabase = require("./config");
const router = require("./routes/blog_routes");

// Create an instance of the Express application
const app = express();

// Define the port to listen on, defaulting to 4000 if not specified in the environment
const PORT = process.env.PORT || 4000;

// Configure the database connection
configureDatabase("mongodb://localhost:27017/blogify-api");

// Define a route for the root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, Welcome to Blogs",
    documentation: "Visit /api/blogs for blog-related endpoints",
    status: "success",
  });
});

// Set JSON formatting options for the response
app.set("json spaces", 2);

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Use the blog routes for any requests starting with /api/blogs
app.use("/api/blogs", router);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
