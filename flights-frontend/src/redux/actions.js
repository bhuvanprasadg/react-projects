import {
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
  LOGOUT,
} from "./actionTypes";

export const login = (credentials, navigate) => {
  console.log(`Inside login of actions.js email: ${credentials.email}`);
  return {
    type: LOGIN_REQUESTED,
    payload: { credentials, navigate },
  };
};

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESSFUL,
  payload: user,
});

export const logout = (user) => ({
  type: LOGOUT,
  payload: "",
});

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: { error: error.toString() },
  };
};
