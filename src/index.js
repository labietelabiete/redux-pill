import React from "react";
import ReactDOM from "react-dom";
import ReduxProvider from "./redux/provider";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
