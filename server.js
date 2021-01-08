const express = require("express");
const connectDB = require("./config/db");

//connect database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("api running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => console.log(`server started on ${PORT}`));
