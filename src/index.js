import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header/Header";
<link
  href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap"
  rel="stylesheet"
></link>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
