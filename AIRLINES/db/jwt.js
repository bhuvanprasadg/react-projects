const jwt = require('jsonwebtoken');

const token = jwt.sign(
    {
        username: "Bhuvan",
        isAdmin: true,
        userId: 123987456,
    },
    "secretpass",
    {
        expiresIn: "1800s",
    }
);

console.log(token);

result = jwt.verify(token, "secretpass");
console.log(`result is ${JSON.stringify(result)}`);

decodedToken = jwt.decode(token, "secretpass");
console.log(`decodedToken: ${JSON.stringify(decodedToken)}`);