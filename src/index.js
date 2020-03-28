// #1. 리덕스 기초
// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// // Reducer
// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// // 저장소 생성
// const countStore = createStore(countModifier);

// // subscribe를 통해 state가 변경 될때마다 실행
// const onChange = () => {
//   const state = countStore.getState();
//   console.log("state", state);
//   number.innerText = state;
// };
// countStore.subscribe(onChange);

// // 이벤트
// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// };
// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// };
// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// #2. 리덕스 todo List
// import { createStore } from "redux";
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = text => {
//   return {
//     type: ADD_TODO,
//     text
//   };
// };

// const deleteToDo = id => {
//   return {
//     type: DELETE_TODO,
//     id
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       const newDoToObj = { text: action.text, id: Date.now() };
//       return [newDoToObj, ...state];
//     case DELETE_TODO:
//       const cleaned = state.filter(toDo => toDo.id !== action.id);
//       return cleaned;
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// const dispatchAddToDo = text => {
//   store.dispatch(addToDo(text));
// };

// const dispatchDeleteToDo = e => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteToDo(id));
// };

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach(toDo => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// };

// store.subscribe(paintToDos);

// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);

// 리액트와 redux
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
