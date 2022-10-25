const express = require("express");
const PORT = 3001;
const app = express();

const flightRouter = require("./routes/flight");
const boardingPassRouter = require("./routes/boarding-pass");
const authRouter = require("./routes/auth");
const bookingFlightRouter = require("./routes/bookingticket");
const boardingPassSeatNoRouter = require("./routes/boarding-pass-seat_no");
const airportsRouter = require("./routes/airports");

app.use("/login", authRouter);
app.use("/flight", flightRouter);
app.use("/boarding-pass", boardingPassRouter);
app.use("/flights", bookingFlightRouter);
app.use("/airports", airportsRouter);
app.use("/boardingPass", boardingPassSeatNoRouter);

app.listen(PORT, () => {
  console.log("Flight demo app is up now");
});
