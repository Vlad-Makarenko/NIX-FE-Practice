import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";
import { Crumbs } from "./contexts/CrumbContext";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        BreadCrumbs: new Crumbs(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
