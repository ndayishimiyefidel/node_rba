const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");

//call connection
dbConnect();

//create app

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
//start server
const PORT = process.env.PORT || 6002;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
