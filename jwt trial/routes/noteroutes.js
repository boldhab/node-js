// Create router
const router = require("express").Router();

// Temporary notes storage
let notes = [];


// Get notes belonging to logged-in user
router.get("/", (req, res) => {

  // Filter notes by authenticated username
  res.json(notes.filter(n => n.user === req.user));
});


// Add new note
router.post("/", (req, res) => {

  // Save note with owner info
  notes.push({
    user: req.user,
    text: req.body.text
  });

  res.json({ message: "Note added" });
});

module.exports = router;
