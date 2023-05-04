const express = require('express');
const router = express.Router();
const Note = require('./../models/Note');


// Notes list Route
router.post("/list", async function (req, res) {
  var notes = await Note.find({ userid: req.body.userid });
  res.json(notes);
});


// Notes add Route
router.post("/add", async function (req, res) {
  await Note.deleteOne({ id: req.body.id });
console.log("on");
  const newNote = new Note({
    id: req.body.id,
    userid: req.body.userid,
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();
  const response = { message: "New Note Created!" + `${req.body.id}` };
  res.json(response);
});


// Notes delete Route
router.post("/delete", async function (req, res) {
  await Note.deleteOne({ id: req.body.id });
  const response = { message: "Note deleted Id!" + `${req.body.id}` };
  res.json(response);
});

module.exports = router;