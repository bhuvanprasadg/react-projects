const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const borrowBooks = require("../db/borrow-books");

router.post("/", jsonParser, (req, res) => {
  const book_ids = req.body.book_ids;
  const student_id = req.body.student_id;
  const staff_id = req.body.staff_id;

  borrowBooks.borrowTheBooks(book_ids, student_id, staff_id)
    .then((data) => {
        if(data.length!=0 && data instanceof Array){
            res.json({error:`book ids ${data} is not available`});
        }
        else{
            res.json(data);
        }
    })
    .catch((err) => {
        res.json({
            error: err.toStringify,
        });
        console.log(err);
    });
});

module.exports = router;