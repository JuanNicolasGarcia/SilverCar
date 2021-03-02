import { FC, useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import ListView from "../ListView/ListView";
import "./PageContent.scss";

interface PageContentProps {
  locations: Array<any>;
  isLoaded: boolean;
  error: string | null;
}

const PageContent: FC<PageContentProps> = ({ locations, isLoaded, error }) => {
  const [locationTerm, setLocationTerm] = useState<string>("");
  const [locationResults, setLocationResults] = useState<Array<any>>([]);
  const handleLocationOnChange = (event: any) => {
    setLocationTerm(event.target.value);
  };

  useEffect(() => {
    const results = locations.filter((item) => {
      return item.name.toLowerCase().includes(locationTerm.toLowerCase());
    });

    setLocationResults(results);
  }, [locationTerm, isLoaded, locations]);

  return (
    <div className="pageContent__root">
      <Form className="pageContent__searchBar">
        <Form.Group controlId="location">
          <Form.Label>Where are you headed?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Airport or City"
            onChange={handleLocationOnChange}
            value={locationTerm}
          />
        </Form.Group>

        <Form.Group controlId="pickup">
          <Form.Label>Pickup</Form.Label>
          <Form.Control
            type="text"
            placeholder="Select Pickup"
            disabled={true}
          />
        </Form.Group>

        <Form.Group controlId="return">
          <Form.Label>Return</Form.Label>
          <Form.Control
            type="text"
            placeholder="Select Return"
            disabled={true}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
      {isLoaded ? (
        error ? (
          <div>Error loading location results</div>
        ) : (
          <ListView listResults={locationResults} />
        )
      ) : (
        <div className="pageContent__loading">
          <Spinner animation="border" data-testid="loading_spinner" />
        </div>
      )}
    </div>
  );
};

export default PageContent;
