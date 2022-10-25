import React from "react";
import { Card } from "react-bootstrap";

const SearchFlightResult = ({
  flight_id,
  flight_no,
  scheduled_arrival,
  scheduled_departure,
  aircraft_code,
  departure_airport,
  arrival_airport,
  seats,
}) => {
  return (
    <div>
      <Card style={{ width: '26rem' }}>
        <Card.Body>
          <Card.Title className="fw-bolder">Flight Id {flight_id}</Card.Title>
          <Card.Text><span className="fw-bolder">Flight No</span> {flight_no}</Card.Text>
          <Card.Text><span className="fw-bolder">Scheduled arrival</span> {scheduled_arrival} <span className="fw-bolder">Scheduled Departure</span> {scheduled_departure}</Card.Text>
          <Card.Text><span className="fw-bolder">Aircraft Code</span> {aircraft_code}</Card.Text>
          <Card.Text><span className="fw-bolder">Departure Airport</span> {departure_airport} <span className="fw-bolder">Arrival Airport</span> {arrival_airport}</Card.Text>
          <Card.Text><span className="fw-bolder">Remaining Seats</span> {seats}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchFlightResult;
