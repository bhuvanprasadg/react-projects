const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const boardingPassData = require("../db/boarding-pass");

const jwtUtil = require("../security/jwt");
router.use(jwtUtil.checkToken);

router.get("/",jwtUtil.isPassenger, (req, res) => {
    console.log("Inside the route for getting boardingpass");
    const ticket_no=req.query.ticket_no;
    const flight_id=req.query.flight_id;
    boardingPassData.getBoardingPass(ticket_no,flight_id)
    .then((data)=>{
      res.json(data.rows);
    }).catch((error)=>{
      res.json({error:error});
    })

}); 
module.exports = router;