import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { PaymentsDisplay } from "./components/PaymentsDisplay/PaymentsDisplay";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaymentsDisplay />
    </QueryClientProvider>
  );
};

export default App;
