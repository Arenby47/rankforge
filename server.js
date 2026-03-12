const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const matchRoutes = require("./routes/match");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRoutes);
app.use("/api/match", matchRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/rankforge")
.then(() => {
    console.log("DB Connected");

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch(err => console.log(err));