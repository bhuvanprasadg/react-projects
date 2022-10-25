import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

const Header = ({ token, user, logout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => {
        console.log(`selected ${selectedKey}`);
        switch (selectedKey) {
          case "home":
            navigate("/");
            break;

          case "my-bookings":
            navigate("/my-bookings");
            break;

          case "logout":
            navigate("/login");
            logout();

          default:
            break;
        }
      }}
    >
      <Nav.Item>
        <Nav.Link eventKey="home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="my-bookings">My Bookings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="logout">Logout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
