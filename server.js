const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
// const connectDB = require("./config/db");

dotenv.config();

// mongodb connection
// connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/test", require("./Routes/test"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} mode on Port ${PORT}`
  );
});
