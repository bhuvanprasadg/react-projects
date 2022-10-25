const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const staff = require("../db/staff");

router.post("/", jsonParser, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const match = await staff.checkCredentials(email, password);

  if (match.rows.length == 0) {
    res.status(401).send({ error: "Wrong credentials" });
  } else {
    const payload = {};
    console.log(`match.rows: ${JSON.stringify(match.rows)}`);
    const user = match.rows[0];
    console.log(`user: ${JSON.stringify(user)}`);
    payload.user = { email: email, role: user.role };
    console.log(`payload: ${JSON.stringify(payload)}`);
    const token = jwt.sign(payload, "xyz123@j");
    res.json({ jwt: token });
  }
});

module.exports = router;