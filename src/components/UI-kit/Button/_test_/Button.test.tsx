import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Button from "../Button";
import { Style, Size } from "@/constants/constants";
import { IconStyleButton, BUTTON_TEST_ID } from "../constants";

describe("Button component", () => {
  afterEach(cleanup);

  it("renders button as a link with icon on the left", () => {
    const { getByTestId, getByAltText, asFragment } = render(
      <Button
        label="Test Button"
        isLink={true}
        style={Style.MINIMAL}
        size={Size.SMALL}
        iconStyle={IconStyleButton.ICON_LEFT}
        icon="/path/to/icon.png"
        altIcon="Left Icon"
      />
    );

    const buttonLink = getByTestId(BUTTON_TEST_ID);
    expect(buttonLink).toBeInTheDocument();

    const icon = getByAltText("Left Icon");
    expect(icon).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button with only icon", () => {
    const { getByTestId, getByAltText, asFragment } = render(
      <Button
        label=""
        isLink={false}
        style={Style.MINIMAL}
        size={Size.SMALL}
        iconStyle={IconStyleButton.ICON_ONLY}
        icon="/path/to/icon.png"
      />
    );

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toBeInTheDocument();

    const icon = getByAltText("Icon");
    expect(icon).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button without icon", () => {
    const { getByTestId, queryByAltText, asFragment } = render(
      <Button
        label="Test Button"
        isLink={false}
        style={Style.MINIMAL}
        size={Size.SMALL}
      />
    );

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toBeInTheDocument();

    const icon = queryByAltText("Icon");
    expect(icon).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button with primary style and medium size", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label="Test Button"
        isLink={false}
        style={Style.PRIMARY}
        size={Size.MEDIUM}
      />
    );

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveClass(
      "text-[12px] pt-[9px] pb-[9px] pl-[16px] pr-[16px]"
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders button with  style minimal and LARGE size", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label="Test Button"
        isLink={false}
        style={Style.MINIMAL}
        size={Size.LARGE}
      />
    );

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveClass(
      "text-secondinary-300 text-[16px] pt-[13px] pb-[13px] pl-[41px] pr-[41px]"
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("render button when disabled", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label="Test Button"
        isLink={false}
        style={Style.PRIMARY}
        size={Size.SMALL}
        isDisabled={true}
      />
    );

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toBeDisabled();
    expect(button).toHaveClass(" opacity-40 cursor-not-allowed ");
    expect(asFragment()).toMatchSnapshot();
  });
});
