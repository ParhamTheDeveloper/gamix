import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./shared/contexts/auth.context";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
