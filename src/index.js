import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalThemeProvider from "provider/GlobalThemeProvider";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import reactQueryConfig from "config/reactQueryConfig";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "styles/globals.css";
import { Provider } from "react-redux";
import { store } from "store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: reactQueryConfig,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalThemeProvider>{<App />}</GlobalThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
