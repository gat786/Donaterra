import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.scss";
import QuickStart from "components/QuickStart";
import { BrowserRouter } from "react-router-dom";
import PrimaryRoutes from "routes/primary.routes";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );
  if (isServerInfo)
    return (
      <BrowserRouter>
        <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
          <PrimaryRoutes />
        </MoralisProvider>
      </BrowserRouter>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuickStart />
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);
