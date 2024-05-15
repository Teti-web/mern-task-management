import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Select from "../Select";

describe("Select componet", () => {
  afterEach(cleanup);

  const options = [
    { value: "en", text: "English" },
    { value: "fr", text: "French" },
    { value: "es", text: "Spanish" },
  ];

  it("renders Select component with default value", () => {
    const onChange = jest.fn();
    const { getByText, asFragment } = render(
      <Select options={options} onChange={onChange} buttonValue={""} />
    );
    const defaultOption = getByText("English");
    expect(defaultOption).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders Select component with provided button value", () => {
    const onChange = jest.fn();
    const { getByText, asFragment } = render(
      <Select options={options} onChange={onChange} buttonValue="French" />
    );
    const selectedOption = getByText("French");
    expect(selectedOption).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange when an option is clicked", () => {
    const onChange = jest.fn();
    const { getByText, asFragment } = render(
      <Select options={options} onChange={onChange} buttonValue={""} />
    );

    fireEvent.click(getByText("English"));

    const optionToClick = getByText("French");
    fireEvent.click(optionToClick);
    expect(onChange).toHaveBeenCalledWith("fr");
    expect(asFragment()).toMatchSnapshot();
  });
  it("opens and closes the dropdown when button is clicked", () => {
    const onChange = jest.fn();
    const { getByText, queryByText, asFragment } = render(
      <Select options={options} onChange={onChange} buttonValue={""} />
    );
    const button = getByText("English");
    fireEvent.click(button);
    const dropdownOption = getByText("Spanish");
    expect(dropdownOption).toBeInTheDocument();
    fireEvent.click(button);
    const closedOption = queryByText("Spanish");
    expect(closedOption).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
