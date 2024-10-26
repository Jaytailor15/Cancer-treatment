import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import { PrivyProvider } from "@privy-io/react-auth";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivyProvider
        appId="cm2p47lqo09qdekgaqpeu23bg"
        config={{
          appearance: {
            theme: "dark",
          },
        }}
      >
        <App />
      </PrivyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
