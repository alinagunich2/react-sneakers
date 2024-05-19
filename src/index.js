import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "macro-css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// let arr = [
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 12999,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike Air Max 270",
//     price: 12999,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 8499,
//   },
//   {
//     img: "",
//     name: "Кроссовки Puma X Aka Boku Future Rider",
//     price: 8999,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Under Armour Curry 8",
//     price: 15199,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike Kyrie 7",
//     price: 11299,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Jordan Air Jordan 11",
//     price: 10799,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike LeBron XVIII",
//     price: 16499,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike Lebron XVIII Low",
//     price: 13999,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 8499,
//   },
//   {
//     img: "",
//     name: "Кроссовки Puma X Aka Boku Future Rider",
//     price: 8999,
//   },
//   {
//     img: "",
//     name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
//     price: 11299,
//   },
// ];
