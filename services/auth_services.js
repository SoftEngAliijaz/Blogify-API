const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "ironMan@123";

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

    return token;
}

function validateToken(token) {
    const payload = jwt.verify(token);
    return payload
}


module.exports = { createTokenForUser, validateToken };