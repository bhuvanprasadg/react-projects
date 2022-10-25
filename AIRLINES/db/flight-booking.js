const pool = require("./pool");

async function bookTheFlight(
  date_departure,
  flight_id,
  passenger_id,
  passenger_name,
  ticket_no,
  fare_conditions,
  booking_ref,
  total_amount,
  boarding_no,
  seat_no
) {
    const client = await pool.connect();
    try{
        await client.query('BEGIN');
        const text = "INSERT INTO BOOKINGS VALUES ($1, $2, $3)";
        const values = [booking_ref, date_departure, total_amount];
        const result1 = await client.query(text, values).then().catch((err) => {error: err});

        const text2 = "INSERT INTO TICKETS VALUES ($1, $2, $3, $4)";
        const values2 = [ticket_no, booking_ref, passenger_id, passenger_name];
        const result2 = await client.query(text2, values2).then().catch((err) => {error: err});

        const text3 = "INSERT INTO TICKET_FLIGHTS VALUES ($1, $2, $3, $4)";
        const values3 = [ticket_no, flight_id, fare_conditions, total_amount];
        const result3 = await client.query(text3, values3).then().catch((err) => {error: err});

        const text4 = "INSERT INTO BOARDING_PASSES VALUES($1, $2, $3, $4)";
        const values4 = [ticket_no, flight_id, boarding_no, seat_no];
        const result4 = await client.query(text4, values4).then().catch((err) => {error: err});

        await client.query('COMMIT');
        return 'successfully inserted the data';

    } catch(e){
        await client.query('ROLLBACK');
        throw e;
    } finally{
        client.release();
    }
}

module.exports = { bookTheFlight };
