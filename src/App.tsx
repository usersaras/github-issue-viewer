import { QueryClient, QueryClientProvider } from "react-query";
import IssuesViewer from "./pages";
import { Provider as JotaiProvider } from "jotai";

const queryClient = new QueryClient();

function App() {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <IssuesViewer />
      </QueryClientProvider>
    </JotaiProvider>
  );
}

export default App;
