const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const bookingticketData = require("../db/bookingticket");
const { response } = require("express");
const jwtUtil = require("../security/jwt");
router.use(jwtUtil.checkToken);


router.post("/booking",jwtUtil.isAgent, jsonParser, async (req, res) => {
    const scheduled_departure=req.body.dateOfDeparture;
    const flight_id = req.body.flightId;
    const departure_airport = req.body.departureAirport;
    const arrival_airport=req.body.arrivalAirport;
    const passenger_id=req.body.passengerId;
    const passenger_name=req.body.passengerName;
    const ticket_no=req.body.ticketNo;
    const fare_conditions=req.body.fareConditions;
    const book_ref=req.body.bookingRef;
    const total_amount=req.body.totalAmount;
    const boarding_no=req.body.boardingNo;
    const seat_no=req.body.seatNo;
  
    bookingticketData
      .doTicketBooking(scheduled_departure,flight_id,departure_airport,arrival_airport,
        passenger_id,passenger_name,ticket_no,fare_conditions,book_ref,total_amount,boarding_no,seat_no)
      .then((data) => {
        res.json({ message: "successfully did a booking" });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  });
  
  module.exports = router;
  