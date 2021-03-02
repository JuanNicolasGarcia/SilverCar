import { FC } from "react";
import { Button } from "react-bootstrap";
import "./ListItem.scss";
import { ReactComponent as Plane } from "./flight-24px.svg";
import { ReactComponent as Building } from "./location_city-24px.svg";

interface ListItemProps {
  item: any;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  return (
    <div
      className="listItem__root"
      id={item.id}
      data-testid={`button_${item.id}`}
    >
      <Button variant="outline-dark" className="listItem__button">
        <div>
          <div>{item.name}</div>
          <div>{item.description}</div>
        </div>
        {item.airport_code === null ? (
          <Building data-testid="building_logo" />
        ) : (
          <Plane data-testid="plane_logo" />
        )}
      </Button>
    </div>
  );
};

export default ListItem;
