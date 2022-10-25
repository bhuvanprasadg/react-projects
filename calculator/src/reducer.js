import * as actionTypes from "./actionTypes";

export default function reducer(state = { output: 0 }, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        output:
          parseInt(action.payload.number1) + parseInt(action.payload.number2),
      };

    case actionTypes.SUBTRACT:
      return {
        output:
          parseInt(action.payload.number1) - parseInt(action.payload.number2),
      };

    case actionTypes.MULTIPLY:
      return {
        output:
          parseInt(action.payload.number1) * parseInt(action.payload.number2),
      };

    case actionTypes.DIVIDE:
      return {
        output:
          parseInt(action.payload.number1) / parseInt(action.payload.number2),
      };

    case actionTypes.POWER:
      return {
        output:
          parseInt(action.payload.number1) ** parseInt(action.payload.number2),
      };

    default:
      return state;
  }
}
