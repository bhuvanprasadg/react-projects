const pool = require("./pool");

function issueNewTicket(bookingRef, ticket_no, passenger_id, passenger_name, callbackFunction) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const text = "INSERT INTO TICKETS VALUES ($1, $2, $3, $4)";
    const values = [ticket_no, bookingRef, passenger_id, passenger_name];
    client.query(text, values, callbackFunction);
  });
}

function associateTicketFlight(ticket_no, flight_id, fare_conditions, amount, callbackFunction){
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const text = "INSERT INTO TICKET_FLIGHTS VALUES ($1, $2, $3, $4)";
    const values = [ticket_no, flight_id, fare_conditions, amount];
    client.query(text, values, callbackFunction);
  });
}

module.exports = { issueNewTicket, associateTicketFlight};