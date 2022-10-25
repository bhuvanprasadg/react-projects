import { SET_SORT } from "../actionTypes";
import { SORT_OPTIONS } from "../../constants";

const initialState = SORT_OPTIONS.ASCENDING;

const sortOption = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT: {
      console.log(
        `inside reducer for action type SET_SORT ${JSON.stringify(
          action.payload
        )}`
      );
      return action.payload.sort;
    }
    default: {
      return state;
    }
  }
};

export default sortOption;
