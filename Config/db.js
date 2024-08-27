const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MONGODB database ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB DataBase Error ${error}`);
  }
};

module.exports = connectDB;