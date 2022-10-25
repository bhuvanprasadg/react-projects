const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const flightData = require("../db/flight");
const jwtUtil = require("../security/jwt");

router.get("/", jwtUtil.isPassenger,(req, res) => {
    const pageNum = req.query.pageNum;
    const pageSize = req.query.pageSize;
    const departure = req.query.departureAirport;
    const arrival = req.query.arrivalAirport;
    const scheduled_departure = req.query.scheduledDeparture;
    const flight_id = req.query.flightId;

    if(departure && arrival && pageNum && pageSize){
        flightData.getFlightsWithDepartArrival(pageNum, pageSize, departure, arrival, (error, response) => {
          if (error) {
            res.json({
              error: error.toString(),
            });
          }
          res.json(response.rows);
        });
    }
    else if(!flight_id && scheduled_departure && arrival && pageNum && pageSize){
        flightData.getFlightsWithScheduledDepartureArrival(pageNum, pageSize, scheduled_departure, arrival, (error, response) => {
          if (error) {
            res.json({
              error: error.toString(),
            });
          }
          res.json(response.rows);
        });
    }
    else if(flight_id && scheduled_departure && departure && arrival){
        flightData.checkAvailability(flight_id, scheduled_departure, departure, arrival, (error, response) => {
          if (error) {
            res.json({
              error: error.toString(),
            });
          }
          res.json({
            seats_left: response.rows[0].count, //- response.rows[1].count,
          });
        });
    }
    else{
      flightData.getAllFlights(pageNum, pageSize, (error, response) => {
        if (error) {
          res.json({
            error: error.toString(),
          });
        }
        res.json(response.rows);
      });
    }
});

router.get('/findWithArrDep',jwtUtil.isPassenger, (req,res) => {
  const pageNum = req.query.pageNum;
  const pageSize = req.query.pageSize;
  const departure = req.query.departureAirport;
  const arrival = req.query.arrivalAirport;

  flightData.getFlightsWithDepartArrival(pageNum, pageSize, departure, arrival, (error, response) => {
    if (error) {
      res.json({
        error: error.toString(),
      });
    }
    res.json(response.rows);
  });
  
});

router.delete('/', jwtUtil.isAdmin, jsonParser, (req,res) => {
  const flight_id = req.body.flightId;

  flightData.deleteFlight(flight_id).then((data) => {
    res.json({
      message: data,
    });
  }).catch((err) => {
    console.log('inside flight routes');
    console.log(error);
  });
});

module.exports = router;
