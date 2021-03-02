import { FC } from "react";
import "./PageFooter.scss";

const PageFooter: FC = () => {
  return (
    <div className="pageFooter__root">
      <div data-testid="copyright">
        Silvercar by Audi. All rights reserved. Copyright 2020
      </div>
      <div className="pageFooter__links">
        <div className="pageFooter__link">Careers</div>
        <div className="pageFooter__link">Press</div>
        <div className="pageFooter__link">Terms</div>
        <div className="pageFooter__link">Privacy</div>
      </div>
    </div>
  );
};

export default PageFooter;
