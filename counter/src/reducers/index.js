export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "DECREMENTBY2":
      return state - 2;
    case "INCREMENTBY2":
      return state + 2;
    default:
      return state;
  }
};
