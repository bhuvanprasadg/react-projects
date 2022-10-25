const pool = require("./pool");

async function checkCredentials(email, password) {
  const client = await pool.connect();
  try {
    const text =
      "select email, role from users where email=$1 and password=$2";

    const values = [email, password];
    const response = await client.query(text, values);
    return response;
  } finally {
    client.release();
  }
}

module.exports = {
  checkCredentials,
};
