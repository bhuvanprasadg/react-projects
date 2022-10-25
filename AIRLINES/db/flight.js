const pool = require("./pool");

function getAllFlights(pageNum, pageSize, callbackFunction) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const text = "SELECT * FROM FLIGHTS LIMIT $1 OFFSET $2";
    const values = [pageSize, (pageNum - 1) * pageSize];
    client.query(text, values, callbackFunction);
  });
}

function getFlightsWithDepartArrival(pageNum, pageSize, departure, arrival, callbackFunction) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const text = "SELECT * FROM FLIGHTS WHERE departure_airport = $3 AND arrival_airport= $4 LIMIT $1 OFFSET $2";
    const values = [pageSize, (pageNum - 1) * pageSize, departure, arrival];
    client.query(text, values, callbackFunction);
  });
}

function getFlightsWithScheduledDepartureArrival(pageNum, pageSize, scheduled_departure, arrival, callbackFunction) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const text = "select * from flights where date(scheduled_departure) = $3 and arrival_airport = $4 limit $1 offset $2";
    const values = [pageSize, (pageNum - 1) * pageSize, scheduled_departure, arrival];
    client.query(text, values, callbackFunction);
  });
}

function checkAvailability(flight_id, scheduled_departure, departure_airport, arrival_airport, callbackFunction){
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const text = "select count(s.seat_no) as count from flights f inner join seats s on f.aircraft_code = s.aircraft_code where f.flight_id = $1 and seat_no not in(select tf.seat_no from flights finner join seats s on f.aircraft_code = s.aircraft_code left join boarding_passes  tf on s.seat_no = tf.seat_no where f.flight_id = $1 and tf.flight_id = $1 and scheduled_departure::date = $2 and departure_airport = $3 and arrival_airport = $4)";
    const values = [flight_id, scheduled_departure, departure_airport, arrival_airport];
    client.query(text, values, callbackFunction);
  });
}

async function deleteFlight(flight_id){
  const client = await pool.connect();
  try{
    await client.query("update flights set status = 'Cancelled' where flight_id = $1", [flight_id]);
    return 'successfully cancelled the flight';
  }catch(err){
    console.log(err);
  }finally{
    client.release();
  }
}

module.exports = { getAllFlights, getFlightsWithDepartArrival, getFlightsWithScheduledDepartureArrival, checkAvailability, deleteFlight};
