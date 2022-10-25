const pool=require("./pool");

async function doTicketBooking(scheduled_departure,flight_id,departure_airport,arrival_airport,
    passenger_id,passenger_name,ticket_no,fare_conditions,book_ref,total_amount,boarding_no,seat_no)
 {
    
    const client=await pool.connect();
    await client.query('BEGIN');
    
    const text_avail=`select
    count(*)
from
    seats
    inner join flights on seats.aircraft_code = flights.aircraft_code
    left join boarding_passes on boarding_passes.flight_id = flights.flight_id
    and boarding_passes.seat_no = seats.seat_no
where
    boarding_passes.seat_no is NULL
    and flights.flight_id = $1`;
    //const text_avail = "select count(*)-(select count(*) from boarding_passes where flight_id=$1) as available_seats from flights inner join seats on flights.aircraft_code=seats.aircraft_code where flight_id=$1 and scheduled_departure=$2 and departure_airport=$3 and arrival_airport =$4";
    const values_avail=[flight_id];//,scheduled_departure,departure_airport,arrival_airport];
    const result_avail=await client.query(text_avail,values_avail);
    if(result_avail.rows[0].count>0){
        try{
        
            const text="INSERT INTO BOOKINGS VALUES($1,$2,$3)";
            const book_date=new Date();
            const values=[book_ref,book_date,total_amount];
            const result1=await client.query(text,values).catch((err)=>{console.log(err)});
        
            console.log("Added in bookings");
            console.log(book_ref,book_date,total_amount);
    
            const text2="INSERT INTO TICKETS VALUES($1,$2,$3,$4,$5)";
            const contact_data=null;
            const values2=[ticket_no,book_ref,passenger_id,passenger_name,contact_data];
            const result2=await client.query(text2,values2).catch((err)=>{console.log(err)});
            console.log("Added in tickets");
            console.log(ticket_no,book_ref,passenger_id,passenger_name,contact_data);
    
            const text3="INSERT INTO TICKET_FLIGHTS VALUES($1,$2,$3,$4)";
            const values3=[ticket_no,flight_id,fare_conditions,total_amount];
            const result3=await client.query(text3,values3).catch((err)=>{console.log(err)});
            console.log("Added in ticket_flights");    
            console.log(ticket_no,flight_id,fare_conditions,total_amount);
            
            const text4="INSERT INTO BOARDING_PASSES VALUES($1,$2,$3,$4)";
            const values4=[ticket_no,flight_id,boarding_no,seat_no];
            const result4=await client.query(text4,values4).catch((err)=>{console.log(err)});
            console.log("Added in boarding_passes");
            console.log(ticket_no,flight_id,boarding_no,seat_no);
            await client.query("COMMIT");
            console.log("committed");
            return "successfully inserted";
        }
        catch(e){
            await client.query('ROLLBACK');
            console.log(e);
            throw e;
        
        }
        finally{
            client.release();
        }
    }
    else{
        throw 'seats are not available in this flight';
    }
   

 }

 module.exports={doTicketBooking};