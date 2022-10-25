import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);
  
  return <div>HomeContainer</div>;
};

export default HomeContainer;
