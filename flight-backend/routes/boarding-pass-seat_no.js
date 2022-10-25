const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const updateSeatNoData = require("../db/boarding-pass-seat_no");

const jwtUtil = require("../security/jwt");
router.use(jwtUtil.checkToken);


router.put("/",jwtUtil.isAgent,jsonParser,(req,res)=>{
    console.log("Inside the route for updatind seat_no");
    const ticket_no=req.body.ticketNo;
    const flight_id=req.body.flightId;
    const boarding_no=req.body.boardingNo;
    const seat_no=req.body.seatNo;
    try{
        updateSeatNoData.updateSeatNo(ticket_no,flight_id,boarding_no,seat_no);
        res.json({message:"Updated seat_no successfully"});
    }
    catch(err){
        res.status(500).send({error:err});
    }
});

module.exports = router;