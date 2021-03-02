import { FC } from "react";
import { Button } from "react-bootstrap";
import logo from "./silvercar_logo.png";
import "./PageHeader.scss";

const PageHeader: FC = () => {
  const emptyLink = "http://localhost:3000/";

  return (
    <div className="pageHeader__root">
      <a href={emptyLink}>
        <img src={logo} alt="Silver Car Logo" data-testid="sc_logo" />
      </a>
      <div className="pageHeader__linkContent">
        <div className="pageHeader__links">
          <Button className="pageHeader__link" variant="outline-dark" href={emptyLink}>
            How it Works
          </Button>
          <Button className="pageHeader__link" variant="outline-dark" href={emptyLink}>
            Locations
          </Button>
          <Button className="pageHeader__link" variant="outline-dark" href={emptyLink}>
            Vehicles
          </Button>
          <Button className="pageHeader__link" variant="outline-dark" href={emptyLink}>
            Help
          </Button>
        </div>
        <div className="pageHeader__logSign">
          <Button variant="outline-dark" href={emptyLink}>
            Login
          </Button>
          <span className="pageHeader__logSignSpacer">|</span>
          <Button variant="outline-dark" href={emptyLink}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
