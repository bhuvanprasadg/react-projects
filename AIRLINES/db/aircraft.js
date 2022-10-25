const pool = require("./pool");

function getAllAircraftsData(callbackFunction) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    client.query("SELECT * from aircrafts_data", callbackFunction);
  });
}

module.exports = { getAllAircraftsData };
