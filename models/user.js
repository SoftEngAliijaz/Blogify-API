const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    profileImageUrl: {
      type: String,
      default: "/images/user_avatar.png",
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return null;

  const salt = randomBytes(16).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
  next();
});
const User = model("User", userSchema);
module.exports = User;
