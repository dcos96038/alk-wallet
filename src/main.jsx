import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import "./index.css";
import { AppRouter } from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Tooltips from "./Components/Tooltips";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Tooltips/>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
