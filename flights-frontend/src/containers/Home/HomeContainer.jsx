import React from "react";
import { connect } from "react-redux";
import Home from "../../components/Home/Home";

const HomeContainer = (props) => {
  return <Home {...props} />;
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    role: state.user.role,
  };
};

export default connect(mapStateToProps)(HomeContainer);
