const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB connected: ${conn.connection.host}, ${conn.connection.name}`
    );
  } catch (error) {
    console.log("Error while connecting to database", error);
    process.exit(1); // if there no error exit program
  }
};

module.exports = dbConnect;
