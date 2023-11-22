import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.jsx';
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
