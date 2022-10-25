const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const aircraftData = require("../db/aircraft");
const jwtUtil = require("../security/jwt");

router.use(jwtUtil.checkToken);

router.get("/", (req, res) => {
  aircraftData.getAllAircraftsData((error, response) => {
    if (error) {
      res.json({
        error: error.toString(),
      });
    }
    res.json(response.rows);
  });
});

module.exports = router;
