import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
