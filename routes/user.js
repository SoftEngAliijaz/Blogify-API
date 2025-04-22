const { Router } = require("express");
const User = require("../models/user");
const router = Router();

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/user/signin", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    console.log("Token", token);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 5 * 60 * 60 * 1000,
    });

    return res.redirect("/");
  } catch (error) {
    console.error("Signin error:", error);

    return res.render("signin", { error: "Incorrect Email or Password" });
  }
});

router.post("/user/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    await User.create({ fullName, email, password });
    res.redirect("/");
  } catch (error) {
    console.error("Signup error:", error);
    res.render("signup", { error: "Error creating user. Try again." });
  }
});

router.get("/logout", (req, res) => {
  return res.clearCookie("token").redirect("/");
});
module.exports = router;
