import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import UIkit from "@pages/UI-Kit/UIkit";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/ui-kit" element={<UIkit />} />
            {/* <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
