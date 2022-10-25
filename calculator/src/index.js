import store from "./store";
import {
  addition,
  subtraction,
  multiplication,
  division,
  power,
} from "./actions";

function calculate() {
  console.log("inside the button");

  const number1 = document.getElementsByName("number1")[0].value;
  const number2 = document.getElementsByName("number2")[0].value;

  const operation = document.getElementsByName("operation")[0].value;
  console.log(
    `number1: ${number1}, number2: ${number2}, operation: ${operation}`
  );

  switch (operation) {
    case "add":
      store.dispatch(
        addition({
          number1: number1,
          number2: number2,
        })
      );
      break;
    case "subtract":
      store.dispatch(
        subtraction({
          number1: number1,
          number2: number2,
        })
      );
      break;
    case "divide":
      store.dispatch(
        division({
          number1: number1,
          number2: number2,
        })
      );
      break;
    case "multiply":
      store.dispatch(
        multiplication({
          number1: number1,
          number2: number2,
        })
      );
      break;
    case "power":
      store.dispatch(
        power({
          number1: number1,
          number2: number2,
        })
      );
      break;
    default:
      break;
  }
}

document.querySelector("button").addEventListener("click", calculate);

store.subscribe(() => {
  console.log(`state has changed: ${JSON.stringify(store.getState())}`);
  document.querySelector(".output").innerHTML = store.getState().output;
});
