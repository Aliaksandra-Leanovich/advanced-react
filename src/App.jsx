import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FetchTopQuotes from "./components/top-quotes";
import UpdateQuotes from "./components/update-quotes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <UpdateQuotes />
        <FetchTopQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
