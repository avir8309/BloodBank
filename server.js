const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");
const connectDB = require("./db");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running on Port ${process.env.PORT}`
      .bgBlue.white
  );
});
