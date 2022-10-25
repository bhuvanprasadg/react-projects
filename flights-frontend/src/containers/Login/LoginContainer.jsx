import React from "react";
import { connect } from "react-redux";
import Login from "../../components/Login/Login";
import { login } from "../../redux/actions";

const LoginContainer = ({ login }) => {
  return <Login login={login} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials, navigate) => dispatch(login(credentials, navigate)),
  };
};
export default connect(null, mapDispatchToProps)(LoginContainer);
