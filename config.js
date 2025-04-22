const mongoose = require("mongoose");

/// configure db
function connectToDataBase(url) {
  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB is Connected Successfully!");
    })
    .catch((e) => {
      console.log("Error", e);
    });
}

module.exports = connectToDataBase;
