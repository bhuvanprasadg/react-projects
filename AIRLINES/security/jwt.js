const jwt = require("jsonwebtoken");

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

function isAdmin(req, res, next){
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(" ")[1];

    try{
      const payload = jwt.verify(token,"abc098@r");
      if(payload.isAdmin){
        next();
      }
    }catch(err){
      res.status(401).send({error: err.toString()});
    }
  }
  else{
    res.status(401).send({error: "only admin role is permitted to do this.."});
  }
}

function isAgent(req, res, next){
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(" ")[1];

    try{
      const payload = jwt.verify(token,"mno456@s");
      if(payload.isAgent){
        console.log('Agent Done..!');
        next();
      }
    }catch(err){
      res.status(401).send({error: err.toString()});
    }
  }
  else{
    res.status(401).send({error: "only agent role is permitted to do this.."});
  }
}

function isPassenger(req, res, next){
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(" ")[1];

    try{
      const payload = jwt.verify(token,"xyz123@j");
      if(payload.isPassenger){
        next();
      }
    }catch(err){
      res.status(401).send({error: err.toString()});
    }
  }
  else{
    res.status(401).send({error: "only passenger role is permitted to do this.."});
  }
}

module.exports = { checkToken, isAdmin , isAgent, isPassenger};