// Initialization of express
const express = require("express"); // This is used to make server
const app = express(); // Invoking express() function

// Initialization of mongoose
const mongoose = require("mongoose");

// Initialization of Notes
const Note = require("./models/Note");

// Initialization of body-parser
const bodyParser = require("body-parser");
 
// extended true -> nested object (correct)
// extended false -> nested objects (not correct)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongodbPath = "mongodb+srv://curiousnation07:abhi1234@cluster0.prk7wha.mongodb.net/notesdb";

// when the mongoose will connect then the app
mongoose.connect(mongodbPath).then(function () {
  // App Route (/)
  app.get("/", function (req, res) {
    const response = { message: "API works!" };
    res.json(response);
  });

  const noteRouter = require("./routes/Note");
  app.use("/notes", noteRouter);
});

// Starting the server on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server Started at PORT: " + PORT);
});
