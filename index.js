const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
const connectToDatabase = require("./config");
const path = require("path");
const checkAuthenticationCookie = require("./middlewares/authentication");
const SERVER_PORT = 3000;

connectToDatabase("mongodb://localhost:27017/blogify");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(checkAuthenticationCookie("token"));

app.get("/", (req, res) => {
  return res.render("home", {
    user: req.user,
  });
});

app.use("/", userRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on PORT: ${SERVER_PORT}`);
});
