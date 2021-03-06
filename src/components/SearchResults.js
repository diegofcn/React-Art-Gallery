import { Row, Col, Card, Spinner } from "react-bootstrap";
import { artworkImageUrl } from "./API";
import './SearchResults.css';

function SearchResults({ results, loading }) {
  if (loading) {
    return (
      <Row>
        <Spinner className="mx-auto" animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      </Row>
    );
  }

  if (!(results && results.length)) {
    return null;
  }

  return (
    <Row>
      {results.map((result) => (
        <Col xs={12} md={4} lg={3} key={result.id}>
          <Card className="card">
            <Card.Img
              variant="top"
              src={artworkImageUrl(result.image_id, 250)}
              alt={result.thumbnail?.alt_text}
            />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SearchResults;