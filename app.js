const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("./config/mongoose-connection")

const indexRouter = require("./routes/indexRouter");
const profileRouter = require("./routes/profileRouter");
    
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/profile", profileRouter);



app.listen(3000, () => {
    console.log("Server is   dc running");
});