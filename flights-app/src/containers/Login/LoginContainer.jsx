import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "./api";
import "./index.css";

const LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  return (
    <div>
      <form>
        <ul>
          <li>
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </li>
          <li>
            <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                console.log(`Inside onClick handler: email: ${email}`);
                const response = await login(email, password);
                console.log(`response is ${JSON.stringify(response, null, 2)}`);
                localStorage.setItem("token", response.jwt);
                console.log(`token: ${localStorage.getItem("token")}`);
                if (response.jwt) {
                  navigate("/");
                  console.log("inside token");
                }
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default LoginContainer;