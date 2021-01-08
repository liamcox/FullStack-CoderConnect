const express = require("express");
const connectDB = require('./config/db')

//connect database 
connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("api running"));

app.listen(PORT, () => console.log(`server started on ${PORT}`));
