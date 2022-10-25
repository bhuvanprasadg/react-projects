const pool = require("./pool");

function doNewBooking(bookingRef, bookingDate, totalAmount, callbackFunction) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const text = "INSERT INTO BOOKINGS VALUES ($1, $2, $3)";
    const values = [bookingRef, bookingDate, totalAmount];
    client.query(text, values, callbackFunction);
  });
}

module.exports = { doNewBooking };
