import React from "react";
import { Container, Row } from "react-bootstrap";
import SearchFlightResult from "../SearchFlightResult/SearchFlightResult";

const SearchFlights = ({ results }) => {
  return (
    <div>
      <Container>
        <Row>
          {results.map((item) => (
            <SearchFlightResult {...item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchFlights;
