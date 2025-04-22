const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const path = require("path");
const SERVER_PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then(() => {
    console.log("MongoDB is Connected Successfully!");
  })
  .catch((e) => {
    console.log("Error", e);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  return res.render("home");
});

app.use("/", userRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on PORT: ${SERVER_PORT}`);
});
