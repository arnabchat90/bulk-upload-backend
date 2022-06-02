var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send([
    {
      userId: "123",
      userName: "Arnab",
    },
  ]);
});

module.exports = router;
