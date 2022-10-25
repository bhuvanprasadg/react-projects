import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => {
        console.log(`selected ${selectedKey}`);
        switch (selectedKey) {
          case "my-bookings":
            navigate("/my-bookings");
            break;

          default:
            break;
        }
      }}
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="my-bookings">My Bookings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="logout" onClick={()=>logout()}>Logout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
