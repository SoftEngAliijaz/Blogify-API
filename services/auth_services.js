const jwt = require("jsonwebtoken");
const secret = "ironManIsNowTonyTikka123!";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
  };

  const token = jwt.sign(payload, secret, {
    expiresIn: "5h",
  });
  console.log("JWT_SECRET:", secret);
  return token;
}

function validateToken(token) {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

module.exports = { createTokenForUser, validateToken };
