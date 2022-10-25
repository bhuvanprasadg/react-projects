const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const ticketData = require("../db/ticket");

router.post("/", jsonParser, (req, res) => {
  const bookingRef = req.body.bookingRef;
  const ticket_no = req.body.ticketNo;
  const passenger_name = req.body.passengerName;
  const passenger_id = req.body.passengerId;
  const flight_id = req.body.flightId;
  const fare_conditions = req.body.fareConditions;
  const amount = req.body.amount;

  if (bookingRef && passenger_id && passenger_name) {
    ticketData.issueNewTicket(
      bookingRef,
      ticket_no,
      passenger_name,
      passenger_id,
      (error, response) => {
        if (error) {
          res.json({
            error: error.toString(),
          });
        }
        res.json({ message: "Inserted a row successfully" });
      }
    );
  }
  if (flight_id && fare_conditions && amount) {
    ticketData.associateTicketFlight(
      ticket_no,
      flight_id,
      fare_conditions,
      amount,
      (error, response) => {
        if (error) {
          res.json({
            error: error.toString(),
          });
        }
        res.json({ message: "Inserted a row successfully" });
      }
    );
  }
});

module.exports = router;
