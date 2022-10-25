import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Booking from "../../components/Booking/Booking";

const MyBookingsContainer = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <Container>
      <Booking></Booking>
    </Container>
  );
};

export default MyBookingsContainer;
