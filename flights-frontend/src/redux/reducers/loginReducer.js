import { LOGIN_SUCCESSFUL, LOGIN_FAILURE, LOGOUT } from "../actionTypes";

const initialState = {
  token: "",
  user: {
    email: "",
    role: "passenger",
  },
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSFUL: {
      console.log("Inside reducer for LOGIN_SUCCESSFUL");
      const { token, user } = action.payload;
      console.log(`token: ${token}, user: ${JSON.stringify(user)}`);
      return {
        ...state,
        token: token,
        user: user,
      };
    }

    case LOGIN_FAILURE: {
      console.log("Inside reducer for LOGIN_FAILURE");
      const { error } = action.payload;
      return {
        ...state,
        error: error,
      };
    }
    
    case LOGOUT: {
      console.log("Inside reducer for LOGOUT");
      return {
        ...state,
        token: "",
        user: {email:"", role:""},
      };
    }

    default:
      return state;
  }
}
