import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";

import { search } from "./components/API";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (!(query || query.length)) {
      setResults(null);
      return;
    }


    if (query.length < 3) {
      return;
    }


    setLoading(true);
    search(query, "id", "title", "image_id", "thumbnail")
      .then((searchResults) => {
        if (searchResults && searchResults.data) {
          setResults(searchResults.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="brand">Chicago Art Museum</Navbar.Brand>
        </Navbar>
        <div fluid className="jumbo">
          <Container className="text-center">
            <h1>Find Art You Love</h1>
            <Search query={query} onChange={(e) => setQuery(e.target.value)} />
          </Container>
        </div>
      </header>
      <main>
        <Container fluid>
          {error ? (
            <p>Unable to retrieve results.</p>
          ) : (
            <SearchResults results={results} loading={loading} />
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;