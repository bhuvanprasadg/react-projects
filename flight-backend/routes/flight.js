const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const flightData = require("../db/flight");

const jwtUtil = require("../security/jwt");
router.use(jwtUtil.checkToken);



//protect and check if isAdmin = true
router.delete("/",jwtUtil.isAdmin, jsonParser, (req, res) => {
  console.log("inside the route for delete");
  const flightId = req.body.flightId;
  console.log(`flightId: ${flightId}`);
  try {
    flightData.cancelFlight(flightId);
    res.json({ message: "Cancelled the flight successfully" });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

//List flights given the departure airport and arrival airport (with pagination)
router.get("/findWithArrDep",jwtUtil.isPassenger, (req, res) => {
  const arrival = req.query.arrival;
  const departure = req.query.departure;
  const pageNum = req.query.pageNum;
  const pageSize = req.query.pageSize;
  flightData
    .getAllFlightsWithArrDep(arrival, departure, pageNum, pageSize)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      res.json({ error: error });
    });
});


//Show flights scheduled for a given date, from and to airport codes.
router.get("/findFlights", jwtUtil.isPassenger,(req, res) => {
  console.log(req.query.date);
  const date = req.query.date;
  const from = req.query.from;
  const to = req.query.to;

  flightData
    .findFlights(date, from, to)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

module.exports = router;
