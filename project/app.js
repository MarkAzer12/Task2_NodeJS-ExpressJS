const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/studentsDB")
  .then(() => console.log("MongoDB Connected"));

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});