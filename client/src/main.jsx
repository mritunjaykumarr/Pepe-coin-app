import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExchangePepeCoinProvider } from "./context/PepeCoinContext.jsx";
import { TransactionsProvider } from "./context/TransactionContext.jsx";

import App from "./App.jsx";
import "./index.css";
import "./style/general.css";
import "./style/style.css";
import "./style/pop.css";
import "./style/query.css";

createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <ExchangePepeCoinProvider >
      <StrictMode>
        <App />
      </StrictMode>
    </ExchangePepeCoinProvider>
  </TransactionsProvider>
);
