const pool = require("./pool");

function getBoardingPass(ticket_no, flight_id, callbackFunction){
    pool.connect((err, client, release) => {
        if (err) {
          return console.error("Error acquiring client", err.stack);
        }
    
        const text = "select * from flights f inner join ticket_flights tf on tf.flight_id = f.flight_id inner join tickets t on t.ticket_no = tf.ticket_no where t.ticket_no = $1 and f.flight_id = $2";
        const values = [ticket_no, flight_id];
        client.query(text, values, callbackFunction);
    });
}

function issueBoardingPass(ticket_no, flight_id, boarding_no, seat_no, callbackFunction){
    pool.connect((err, client, release) => {
        if (err) {
          return console.error("Error acquiring client", err.stack);
        }

        const text = "INSERT INTO BOARDING_PASSES VALUES($1, $2, $3, $4)";
        const values = [ticket_no, flight_id, boarding_no, seat_no];
        client.query(text, values, callbackFunction);
    });
}

async function changeSeatNumber(ticket_no, flight_id, boarding_no, seat_no){
  const client = await pool.connect();
  try{
    const text = "update boarding_passes set seat_no = $4 where ticket_no = $1 and flight_id = $2 and boarding_no = $3";
    const values = [ticket_no, flight_id, boarding_no, seat_no];
    await client.query(text, values);
    return 'successfully updated the seat no';
  }finally{
    client.release();
  }
}

module.exports = { getBoardingPass, issueBoardingPass, changeSeatNumber };