const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

app.use(require("./routes"))

app.listen(PORT, function () {
    console.log(`App is running on ${PORT}`);
});


