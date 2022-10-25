const pool = require("./pool");

async function updateSeatNo(ticket_no,flight_id,boarding_no,seat_no) {
    console.log(`Inside update seat_no`);
    const client = await pool.connect();
    try {
      const text = "update boarding_passes set seat_no='100A' where ticket_no=$1 and flight_id=$2 and boarding_no=$3 and seat_no=$4";
      const values = [ticket_no,flight_id,boarding_no,seat_no];
      const response = await client.query(text, values);
      console.log(`response: ${JSON.stringify(response)}`);
      return response;
    } finally {
      client.release();
    }
  }

  module.exports={ updateSeatNo };