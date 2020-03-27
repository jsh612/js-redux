import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

// 저장소 생성
const countStore = createStore(countModifier);

// subscribe를 통해 state가 변경 될때마다 실행
const onChange = () => {
  const state = countStore.getState();
  console.log("state", state);
  number.innerText = state;
};
countStore.subscribe(onChange);

// 이벤트
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
