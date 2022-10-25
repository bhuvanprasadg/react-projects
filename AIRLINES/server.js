const express = require("express");
const PORT = 3030;
const app = express();
const aircraftRouter = require("./routes/aircraft");
const flightRouter = require("./routes/flight");
const bookingRouter = require("./routes/booking");
const boardingPassRouter = require("./routes/boarding");
const ticketRouter = require("./routes/ticket");
const flightBookingRouter = require("./routes/flight-booking");
const booksRouter = require("./routes/books");
const borrowRouter = require("./routes/borrow-books");
const returnRouter = require("./routes/return");
const authRouter = require("./routes/auth");

app.use("/aircraft", aircraftRouter);
app.use("/flight", flightRouter);
app.use("/booking", bookingRouter);
app.use('/boarding-pass', boardingPassRouter);
app.use('/ticket', ticketRouter);
app.use('/flights', flightBookingRouter);
app.use('/books', booksRouter);
app.use('/borrow-books', borrowRouter);
app.use('/return-books', returnRouter);
app.use('/login', authRouter);
app.listen(PORT, () => {
  console.log("Flight demo app is up now");
});