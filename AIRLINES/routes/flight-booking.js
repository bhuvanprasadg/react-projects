const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const flightBooking = require("../db/flight-booking");
const flightAvailable = require("../db/flight");

const jwtUtil = require("../security/jwt");

router.post("/booking", jwtUtil.isAgent, jsonParser, (req, res) => {
  const date_departure = req.body.dateOfDeparture;
  const flight_id = req.body.flightId;
  const departure_airport = req.body.departureAirport;
  const arrival_airport = req.body.arrivalAirport;
  const passenger_id = req.body.passengerId;
  const passenger_name = req.body.passengerName;
  const ticket_no = req.body.ticketNo;
  const fare_conditions = req.body.fareConditions;
  const booking_ref = req.body.bookingRef;
  const total_amount = req.body.totalAmount;
  const boarding_no = req.body.boardingNo;
  const seat_no = req.body.seatNo;
  flightAvailable.checkAvailability(
    flight_id,
    date_departure,
    departure_airport,
    arrival_airport,
    (error, response) => {
      if (error) {
        res.json({
          error: error.toString(),
        });
      } else if (response.rows[0].count <= 0 ) {
        res.json({
          message: "flight is full or no flight is there",
        });
      } else if (response.rows[0].count > 0) {

        console.log('inside the flight booking');
        flightBooking.bookTheFlight(
            date_departure,
            flight_id,
            departure_airport,
            arrival_airport,
            passenger_id,
            passenger_name,
            ticket_no,
            fare_conditions,
            booking_ref,
            total_amount,
            boarding_no, 
            seat_no).then((data) => {
                res.json({
                  message: data,
                });
            })
            .catch((error) => {
                res.json({ error: error });
                console.log(error);
            }
        );
      } else {
        res.json({
          message: "error in booking a ticket",
        });
      }
    }
  );
});

module.exports = router;