const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const connectToDatabase = require("./config");
const path = require("path");
const SERVER_PORT = 3000;

connectToDatabase("mongodb://localhost:27017/blogify");

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
