const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const airportData = require("../db/airports");

const jwtUtil = require("../security/jwt");
router.use(jwtUtil.checkToken);

router.get("/", jwtUtil.isPassenger, jsonParser, (req, res) => {
  console.log("inside the route for get all airports");
  try {
    airportData
      .getAllAirports()
      .then((data) => {
        res.json(data.rows);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

module.exports = router;
