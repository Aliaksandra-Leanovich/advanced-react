import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QueryCancellationWithAbortSignal from "./components/query-cancellation";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <QueryCancellationWithAbortSignal />
      </QueryClientProvider>
    </>
  );
}

export default App;
