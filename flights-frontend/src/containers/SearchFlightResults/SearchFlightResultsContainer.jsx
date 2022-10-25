import React from "react";
import { useLocation } from "react-router-dom";
import SearchFlights from "../../components/SearchFlights/SearchFlights";

const SearchFlightResultsContainer = () => {
  const location = useLocation();
  return <SearchFlights results={location.state.results} />;
};

export default SearchFlightResultsContainer;
