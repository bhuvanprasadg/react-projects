const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var jsonParser = bodyParser.json();
const staff = require("../db/staff");

router.post('/', jsonParser, async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const matching = await staff.checkCredentials(email, password);

    if(matching.rows.length == 0){
        res.status(401).send({message: "Wrong Credentials"});
    }
    else{
        payload = {};
        const user = matching.rows[0];
        if(user.role === 'admin'){
            payload.isAdmin = true;
            payload.isAgent = true;
            payload.isPassenger = true;
        }
        else if(user.role === 'agent'){
            payload.isAdmin = false;
            payload.isAgent = true;
            payload.isPassenger = true;
        }
        else if(user.role === 'passenger'){
            payload.isAdmin = false;
            payload.isAgent = false;
            payload.isPassenger = true;
        }

        const token = jwt.sign(payload, password);
        res.json({ jwt: token});
    }
});

module.exports = router;