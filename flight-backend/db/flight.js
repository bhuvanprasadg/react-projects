const pool = require("./pool");

//List flights given the departure airport and arrival airport (with pagination)
async function getAllFlightsWithArrDep(arr, dep, pageNum, pageSize) {
  const client = await pool.connect();
  try {
    pageNum = (pageNum - 1) * pageSize;
    const text =
      "SELECT * FROM FLIGHTS where departure_airport= $2 AND arrival_airport = $1 limit $4 offset $3";
    const values = [arr, dep, pageNum, pageSize];
    const response = await client.query(text, values);
    return response;
  } finally {
    client.release();
  }
}

//Show flights scheduled for a given date, from and to airport codes.
async function findFlights(date, from, to) {
  const client = await pool.connect();
  try {
    const text = `select
    flight_id,
    flight_no,
    scheduled_arrival,
    scheduled_departure,
    aircraft_code,
    departure_airport,
    arrival_airport,
    (
        select
            count(*)
        from
            seats
            inner join flights as flights2 on seats.aircraft_code = flights2.aircraft_code
            left join boarding_passes on boarding_passes.flight_id = flights2.flight_id
            and boarding_passes.seat_no = seats.seat_no
        where
            boarding_passes.seat_no is NULL
            and flights2.flight_id = flights.flight_id
    ) as seats
FROM
    flights
where
    scheduled_arrival :: date = $1
    and arrival_airport = $2
    AND departure_airport = $3`;

    const values = [date, from, to];
    const response = await client.query(text, values);
    return response;
  } finally {
    client.release();
  }
}

//API to cancel a flight
async function cancelFlight(flightId) {
  console.log(`Inside cancelFlight`);
  console.log(`flightId: ${flightId}`);
  const client = await pool.connect();
  try {
    const text = "update flights set status='Cancelled' where flight_id=$1";
    const values = [flightId];
    const response = await client.query(text, values);
    console.log(`response: ${JSON.stringify(response)}`);
    return response;
  } finally {
    client.release();
  }
}

module.exports = {
  getAllFlightsWithArrDep,
  findFlights,
  cancelFlight,
};
