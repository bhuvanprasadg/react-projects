const pool = require("./pool");

async function getBoardingPass(ticket_no,flight_id) {
  console.log(`Inside getBoardingPass`);
  console.log(`ticket_no:${ticket_no},flight_id:${flight_id}`);
  const client=await pool.connect();
      try{
      const text="SELECT t.passenger_name,b.book_ref,t.ticket_no,f.flight_no,bp.boarding_no,bp.seat_no,f.departure_airport,ad.city as departure_city,f.scheduled_departure,f.arrival_airport,ad1.city as arrival_city,f.scheduled_arrival,tf.fare_conditions,tf.amount,bg.boarding_gate_no from bookings b inner join tickets t on b.book_ref = t.book_ref inner join boarding_passes bp on bp.ticket_no = t.ticket_no inner join ticket_flights tf on tf.ticket_no = bp.ticket_no inner join flights f on f.flight_id = tf.flight_id inner join airports_data ad on f.departure_airport = ad.airport_code inner join airports_data ad1 on f.arrival_airport = ad1.airport_code inner join boarding_gates bg on f.boarding_gate_ids=bg.boarding_gate_ids where t.ticket_no=$1 and f.flight_id=$2";
      const values=[ticket_no,flight_id];
      const response=await client.query(text,values);
      console.log(`response: ${JSON.stringify(response)}`);
      return response;
      }
      finally {
        client.release();
      }
}
  
module.exports = { getBoardingPass };