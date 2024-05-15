import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { INPUT_TEST_ID } from "../constans";
import Input from "../Input";

describe("Input component", () => {
  afterEach(cleanup);

  it("renders input without label", () => {
    const onChangeMock = jest.fn();
    const { getByTestId, asFragment } = render(
      <Input type="text" isLabel={false} onChange={onChangeMock} />
    );
    const inputElement = getByTestId(INPUT_TEST_ID);
    expect(inputElement).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders input with label", () => {
    const onChangeMock = jest.fn();
    const { getByText, getByTestId, asFragment } = render(
      <Input
        type="text"
        isLabel={true}
        label="Username"
        onChange={onChangeMock}
      />
    );
    const labelElement = getByText("Username");
    const inputElement = getByTestId(INPUT_TEST_ID);
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders input with placeholder", () => {
    const onChangeMock = jest.fn();
    const placeholderText = "Enter your username";
    const { getByPlaceholderText, asFragment } = render(
      <Input
        type="text"
        isLabel={false}
        placeholder={placeholderText}
        onChange={onChangeMock}
      />
    );
    const inputElement = getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange event handler", () => {
    const onChangeMock = jest.fn();
    const { getByTestId, asFragment } = render(
      <Input type="text" isLabel={false} onChange={onChangeMock} />
    );
    const inputElement = getByTestId(INPUT_TEST_ID);
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);

    expect(asFragment()).toMatchSnapshot();
  });
});
