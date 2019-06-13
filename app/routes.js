const express = require("express");
const router = express.Router();

// Add your routes here - above the module.exports line

router.get("/", function(req, res) {
  res.render("index");
});

router.post("/new-or-renew-answer", function(req, res) {
  if (req.session.data["is-new"] === "no") {
    res.redirect("/date-of-birth");
  } else {
    res.redirect("/lost-or-stolen");
  }
});

router.post("/lost-or-stolen-answer", function(req, res) {
  if (req.session.data["is-lost"] === "yes") {
    res.redirect("/cancel-passport");
  } else {
    res.redirect("/date-of-birth");
  }
});

module.exports = router;
