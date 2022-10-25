const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const returnbooks = require("../db/return");
const jwtUtil = require("../security/jwt")

router.use(jwtUtil.checkToken);

router.post("/", jsonParser, (req, res) => {
    const book_ids = req.body.book_ids;
    const penalty = req.body.penalty_amounts;
    const student_id = req.body.student_id;
    const staff_id = req.body.staff_id;

    returnbooks.returnBooks(book_ids, penalty, student_id, staff_id).then((data) => {
        res.json({
            message: data,
        });
    }).catch((err) => {
        res.json({
            error:err,
        });
    });
});

module.exports = router;