import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Card, { CardType } from "../Card";
import { CARD_TEST_ID } from "../constants";

const mockCardData: CardType = {
  img: "mock-image-url",
  altImage: "Mock Alt Image",
  title: "Mock Title",
  suptitle: "Mock Subtitle",
  timeCreated: "Mock Time",
  progressValue: 50,
};

describe("Card componet", () => {
  afterEach(cleanup);

  it("renders with correct data", () => {
    const { getByTestId, getByAltText, getByText, asFragment } = render(
      <Card {...mockCardData} />
    );

    expect(getByTestId(CARD_TEST_ID)).toBeInTheDocument();
    expect(getByAltText("Mock Alt Image")).toBeInTheDocument();
    expect(getByText("Mock Title")).toBeInTheDocument();
    expect(getByText("Mock Subtitle")).toBeInTheDocument();
    expect(getByText("50%")).toBeInTheDocument();
    expect(getByText("Mock Time")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
