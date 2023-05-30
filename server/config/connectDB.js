const { mongoose } = require("mongoose");

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_DB);
    console.log("DB Connected.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
