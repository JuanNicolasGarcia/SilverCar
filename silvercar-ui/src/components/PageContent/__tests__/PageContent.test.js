import { render, screen } from "@testing-library/react";
import PageContent from "../PageContent";

const locations = [
  {
    id: 1,
    name: "Austin",
    descritption: "City of Austin",
    airport_code: null,
  },
  {
    id: 2,
    name: "Dallas",
    descritption: "Dallas Aiport",
    airport_code: "airport",
  },
  {
    id: 3,
    name: "Houston",
    descritption: "City of Houston",
    airport_code: null,
  },
];

describe("<PageContent />", () => {
  beforeEach(() => {
    render(<PageContent locations={locations} isLoaded={true} error={null} />);
  });

  it("renders the location buttons", () => {
    const button1 = screen.getByTestId("button_1");
    const button2 = screen.getByTestId("button_2");
    const button3 = screen.getByTestId("button_3");
    const planeLogo = screen.getByTestId("plane_logo");

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
    expect(planeLogo).toBeInTheDocument();
  });
});

describe("PageContent states", () => {
  it("renders the loading spinner", () => {
    render(<PageContent locations={locations} isLoaded={false} error={null} />);
    const loading = screen.getByTestId("loading_spinner");
    expect(loading).toBeInTheDocument();
  });

  it("renders the error message", () => {
    render(<PageContent locations={locations} isLoaded={true} error="error 404" />);
    const error = screen.getByText("Error loading location results");
    expect(error).toBeInTheDocument();
  });

});
