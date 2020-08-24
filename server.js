const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/dbTest",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(require("./routes/api"))

app.listen(PORT, function () {
    console.log(`App is running on ${PORT}`);
});

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//     console.log("we are connected")
// });

