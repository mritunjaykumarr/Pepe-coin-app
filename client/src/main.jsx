import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExchangePepeCoinProvider } from "./context/PepeCoinContext.jsx";
import { TransactionsProvider } from "./context/TransactionContext.jsx";
import { RefersProvider } from "./context/RefersContext.jsx";

import App from "./App.jsx";
import "./index.css";
import "./style/general.css";
import "./style/style.css";
import "./style/pop.css";
import "./style/query.css";
import "./style/refer.css";


createRoot(document.getElementById("root")).render(
  <RefersProvider>
    <TransactionsProvider>
      <ExchangePepeCoinProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ExchangePepeCoinProvider>
    </TransactionsProvider>
  </RefersProvider>
);
