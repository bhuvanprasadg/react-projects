const pool = require("./pool");

//List all airports
async function getAllAirports() {
  const client = await pool.connect();
  try {
    const text = "SELECT * FROM airports";
    const response = await client.query(text);
    return response;
  } finally {
    client.release();
  }
}

module.exports = {
  getAllAirports,
};
