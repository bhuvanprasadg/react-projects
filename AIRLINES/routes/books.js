const express = require("express");
const router = express.Router();
const booksData = require('../db/books');
const jwtUtil = require("../security/jwt")

router.use(jwtUtil.checkToken);

router.get('/',(req, res) => {
    const pageNum = req.query.pageNum;
    const pageSize = req.query.pageSize;

    booksData.getAllBooks(pageNum, pageSize).then((data) => {
        res.json(data.rows);
    }).catch((err) => {
        res.json({ error: err });
    });
});

module.exports = router;