import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = ({ token, role }) => {
  const [airports, setAirports] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/airports", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setAirports(response.data);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Formik
            initialValues={{
              dateOfJourney: "2017-09-14",
              fromAirport: "YKS",
              toAirport: "YKS",
            }}
            onSubmit={(values) => {
              console.log("Inside onSubmit");
              const { dateOfJourney, fromAirport, toAirport } = values;
              console.log(
                `dateOfJourney: ${dateOfJourney} fromAirport: ${fromAirport} toAirport: ${toAirport}`
              );

              axios
                .get(
                  `/flight/findFlights?date=${dateOfJourney}&from=${fromAirport}&to=${toAirport}`,
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                  }
                )
                .then((response) => {
                  console.log(response.data);
                  navigate("/flights", { state: { results: response.data } });
                })
                .catch((error) => console.log(error));
            }}
          >
            <Form>
              Date of Journey:
              <Field type="date" name="dateOfJourney" id="dateOfJourney" />
              <ErrorMessage name="dateOfJourney" />
              Departure Airport:
              <Field as="select" name="fromAirport" id="fromAirport">
                {airports.map((item) => (
                  <option key={item.airport_code} value={item.airport_code}>
                    {item.airport_code}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="fromAirport" />
              Arrival Airport:
              <Field as="select" name="toAirport" id="toAirport">
                {airports.map((item) => (
                  <option key={item.airport_code} value={item.airport_code}>
                    {item.airport_code}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="toAirport" />
              <input type="submit" value="Find Flights" />
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
