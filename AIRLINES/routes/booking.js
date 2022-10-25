const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const bookingData = require("../db/booking");

router.post("/", jsonParser, (req, res) => {
  const bookingRef = req.body.bookingRef;
  //take current date
  const bookingDate = new Date();
  const totalAmount = req.body.totalAmount;

  bookingData.doNewBooking(
    bookingRef,
    bookingDate,
    totalAmount,
    (error, response) => {
      if (error) {
        res.json({
          error: error.toString(),
        });
      }
      res.json({ message: "Inserted a row successfully" });
    }
  );
});

module.exports = router;
