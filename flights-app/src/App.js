import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AircraftsContainer from "./containers/Aircrafts/AircraftsContainer";
import AirportsContainer from "./containers/Airports/AirportsContainer";
import AllBookingContainer from "./containers/AllBooking/AllBookingContainer";
import AllFlightsController from "./containers/AllFlightsContainer/AllFlightsController";
import AssignSeatsContainer from "./containers/AssignSeats/AssignSeatsContainer";
import BookingDetailsContainer from "./containers/BookingDetails/BookingDetailsContainer";
import HomeContainer from "./containers/Home/HomeContainer";
import LoginContainer from "./containers/Login/LoginContainer";
import MyBookingsContainer from "./containers/MyBookings/MyBookingsContainer";
import SearchFlightResultsContainer from "./containers/SearchFlightResults/SearchFlightResultsContainer";

function App() {
  return (
    <Container>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/" element={<HomeContainer />} />
          <Route path="/flights" element={<SearchFlightResultsContainer />} />
          <Route path="/assign-seat" element={<AssignSeatsContainer />} />
          <Route
            path="/my-bookings/:bookingId"
            element={<BookingDetailsContainer />}
          />
          <Route path="/my-bookings" element={<MyBookingsContainer />} />
          <Route path="/bookings" element={<AllBookingContainer />} />
          <Route path="/aircrafts" element={<AircraftsContainer />} />
          <Route path="/airports" element={<AirportsContainer />} />
          <Route path="/flights" element={<AllFlightsController />} />
        </Routes>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
