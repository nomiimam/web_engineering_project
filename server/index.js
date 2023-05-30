const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRoute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4001;
mongoose.set("strictQuery", true);
connectDB();

app.get("/test", (req, res) => {
  res.send({ Message: "Node run time Running" });
});
app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
