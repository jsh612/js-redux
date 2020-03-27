import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" }); // 1
countStore.dispatch({ type: "ADD" }); // 2
countStore.dispatch({ type: "ADD" }); // 3
countStore.dispatch({ type: "ADD" }); // 4
countStore.dispatch({ type: "ADD" }); // 5
countStore.dispatch({ type: "MINUS" }); // 4

console.log(countStore.getState());
