const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const boardingPass = require('../db/boarding');

const jwtUtil = require("../security/jwt");


router.get("/", jwtUtil.isPassenger,(req,res) => {
    const ticket_no = req.query.ticketNo;
    const flight_id = req.query.flightId;

    boardingPass.getBoardingPass(ticket_no, flight_id, (error, response) => {
        if (error) {
            res.json({
              error: error.toString(),
            });
          }
          res.json(response.rows);
    });
});

router.post("/", jsonParser, (req,res) => {
    const ticket_no = req.body.ticketNo;
    const flight_id = req.body.flightId;
    const boarding_no = req.body.boardingNo;
    const seat_no = req.body.seatNo;

    console.log(ticket_no, flight_id, boarding_no, seat_no);

    boardingPass.issueBoardingPass(ticket_no, flight_id, boarding_no, seat_no, (error, response) =>{
      if (error) {
        res.json({
          error: error.toString(),
        });
      }
      res.json({ message: "Inserted a row successfully" });
    });
});

router.put("/", jwtUtil.isAgent,jsonParser, (req,res) => {
  const ticket_no = req.body.ticketNo;
  const flight_id = req.body.flightId;
  const boarding_no = req.body.boardingNo;
  const seat_no = req.body.seatNo;

  boardingPass.changeSeatNumber(ticket_no, flight_id, boarding_no, seat_no).then((data) => {
    res.json({
      message: data
    });
  }).catch((err) => {
    console.log(err);
  });

});

module.exports = router;