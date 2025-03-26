const mongoose = require("mongoose");

async function configureDatabase(databaseUrl) {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
}

module.exports = configureDatabase;
