const jwt = require("jsonwebtoken");

function isAdmin(req, res, next) {
  console.log(`Inside jwtUtil.isAdmin check `);
  const authHeader = req.headers.authorization;
  console.log(`authHeader: ${authHeader}`);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(`token: ${token}`);

    try {
      const payload = jwt.verify(token, "abc098@r");
      console.log(`payload: ${JSON.stringify(payload)}`);
      if (payload.isAdmin || payload.user.role === "admin") {
        next();
      } else {
        res
          .status(401)
          .send({ error: "Only admin role is allowed to do this operation" });
      }
    } catch (err) {
      console.log(err);
      res.status(401).send({ error: err });
    }
  } else {
    console.log("Authorization header missing");
    res.status(401).send({ error: "Authorization header missing" });
  }
}

function isPassenger(req, res, next) {
  console.log(`Inside jwtUtil.isPassenger check `);
  const authHeader = req.headers.authorization;
  console.log(`authHeader: ${authHeader}`);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(`token: ${token}`);

    try {
      const payload = jwt.verify(token, "xyz123@j");
      console.log(`payload: ${JSON.stringify(payload)}`);
      if (payload.isPassenger || payload.user.role === "passenger") {
        next();
      } else {
        res.status(401).send({
          error: "Only Passenger role is allowed to do this operation",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(401).send({ error: err });
    }
  } else {
    console.log("Authorization header missing");
    res.status(401).send({ error: "Authorization header missing" });
  }
}

function isAgent(req, res, next) {
  console.log(`Inside jwtUtil.isAgent check `);
  const authHeader = req.headers.authorization;
  console.log(`authHeader: ${authHeader}`);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(`token: ${token}`);

    try {
      const payload = jwt.verify(token, "mno456@s");
      console.log(`payload: ${JSON.stringify(payload)}`);
      if (payload.isAgent || payload.user.role === "agent") {
        next();
      } else {
        res
          .status(401)
          .send({ error: "Only Agent role is allowed to do this operation" });
      }
    } catch (err) {
      console.log(err);
      res.status(401).send({ error: err });
    }
  } else {
    console.log("Authorization header missing");
    res.status(401).send({ error: "Authorization header missing" });
  }
}


function checkToken(req, res, next){
    const authHeader = req.headers.authorization;
    if(authHeader){
      const token = authHeader.split(" ")[1];
  
      try{
        const payload = jwt.verify(token,"xyz123@j");
        next();
      }catch(err){
        res.status(401).send({error: err.toString()});
      }
    }
    else{
      res.status(401).send({error: "User is not authorized"});
    }
}


module.exports = { checkToken, isAdmin , isAgent, isPassenger};