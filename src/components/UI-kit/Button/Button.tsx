import { Size, Style } from "@/constants/constants";
import { FC } from "react";
import { IconStyleButton } from "./constants";

export interface ButtonType {
  label: string;
  isLink: boolean;
  style: Style;
  size: Size;
  link?: string;
  isIcon?: boolean;
  iconStyle?: IconStyleButton;
  icon?: string;
  altIcon?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonType> = ({
  label,
  isLink = true,
  link = "#",
  iconStyle,
  icon,
  altIcon = "Icon",
  onClick,
  isDisabled,
  style = Style.PRIMARY,
  size = Size.SMALL,
}) => {
  let className =
    "font-primary rounded-[10px] focus:border-[1px] focus:border-solid transition-all ease-in-out  duration-500";

  if (style === Style.PRIMARY) {
    className +=
      " text-white bg-primary-500 font-semibold hover:bg-primary-600 focus:border-primary-200 focus:bg-primary-500  disable:bg-primary-500  active:bg-primary-700 ";
  } else if (style === Style.MINIMAL) {
    className +=
      " text-secondinary-300 font-semibold bg-transparent hover:text-secondinary-500 hover:bg-white active:bg-secondinary-100 active:text-secondinary-500 focus:border-secondinary-300 focus:text-secondinary-500 focus:bg-white";
  } else if (style === Style.SECONDARY) {
    className +=
      " text-secondinary-400 font-semibold bg-white border-[1px] border-secondinary-200 hover:text-secondinary-500 hover:border-secondinary-400 active:bg-secondinary-200 active:text-secondinary-400 focus:border-secondinary-200 focus:text-secondinary-500 focus:bg-white";
  }

  if (size === Size.SMALL) {
    className += " text-[12px] pt-[5px] pb-[5px] pl-[16px] pr-[16px]";
  } else if (size === Size.MEDIUM) {
    className += " text-[12px] pt-[9px] pb-[9px] pl-[16px] pr-[16px]";
  } else if (size === Size.LARGE) {
    className += " text-[16px] pt-[13px] pb-[13px] pl-[41px] pr-[41px]";
  }

  if (isDisabled) {
    className += " opacity-40 cursor-not-allowed ";
  }

  if (iconStyle === IconStyleButton.ICON_LEFT) {
    className += " flex items-center w-max gap-[4px]";
    if (isLink) {
      return (
        <a href={link} className={className} aria-disabled={isDisabled}>
          <img src={icon} alt={altIcon} /> {label}
        </a>
      );
    } else {
      return (
        <button onClick={onClick} className={className} disabled={isDisabled}>
          <img src={icon} alt={altIcon} /> {label}
        </button>
      );
    }
  } else if (iconStyle === IconStyleButton.ICON_RIGHT) {
    className += " flex items-center w-max gap-[4px]";
    if (isLink) {
      return (
        <a href={link} className={className} aria-disabled={isDisabled}>
          {label}
          <img src={icon} alt={altIcon} />
        </a>
      );
    } else {
      return (
        <button onClick={onClick} className={className} disabled={isDisabled}>
          {label}
          <img src={icon} alt={altIcon} />
        </button>
      );
    }
  } else if (iconStyle === IconStyleButton.ICON_ONLY) {
    if (isLink) {
      return (
        <a href={link} className={className} aria-disabled={isDisabled}>
          <img src={icon} alt={altIcon} />
        </a>
      );
    } else {
      return (
        <button onClick={onClick} className={className} disabled={isDisabled}>
          <img src={icon} alt={altIcon} />
        </button>
      );
    }
  }

  return (
    <button onClick={onClick} className={className} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
