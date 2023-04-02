import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <App />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={true}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={true}
                  pauseOnHover
                  theme="light"
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
