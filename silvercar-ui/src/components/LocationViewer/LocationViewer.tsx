import { FC, useEffect, useState } from "react";

import PageHeader from "../PageHeader/PageHeader";
import PageContent from "../PageContent/PageContent";
import PageFooter from "../PageFooter/PageFooter";
import { FilterLocations } from "./FilterLocations";

import "./LocationViewer.scss";

const LocationViewer: FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://api.silvercar.com/locations?sort=name&page=1&per_page=100",
        {
          headers: { "Api-Version": "2" },
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    fetchData();
  }, []);

  return (
    <div className="locationViewer__root">
      <PageHeader />
      <PageContent
        locations={FilterLocations(items)}
        isLoaded={isLoaded}
        error={error}
      />
      <PageFooter />
    </div>
  );
};

export default LocationViewer;
