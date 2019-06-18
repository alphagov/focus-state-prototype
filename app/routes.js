const express = require("express");
const router = express.Router();

// Add your routes here - above the module.exports line

router.get("/", function(req, res) {
  res.render("index");
});

//If applying for new passport send user to date of birth page, otherwise send to lost or stolen page
router.post("/new-or-renew-answer", function(req, res) {
  if (req.session.data["is-new"] === "No") {
    res.redirect("/date-of-birth");
  } else {
    res.redirect("/lost-or-stolen");
  }
});

router.post("/lost-or-stolen-answer", function(req, res) {
  if (req.session.data["is-lost"] === "Yes") {
    res.redirect("/cancel-passport");
  } else {
    res.redirect("/date-of-birth");
  }
});

//Summary pages

router.post("/cya-answer", function(req, res) {
  if (req.session.data["is-new"] === "Yes") {
    if (req.session.data["is-lost"] === "Yes") {
      res.redirect("/summary-lost");
    } else {
      res.redirect("/summary-replacement");
    }
  } else {
    res.redirect("/summary-first");
  }
});

module.exports = router;
