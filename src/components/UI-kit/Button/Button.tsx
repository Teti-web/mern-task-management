import { FC } from "react";

export interface ButtonType {
  label: string;
  isLink: boolean;
  link?: string;
  isIcon?: boolean;
  icon?: string;
  altIcon?: string;
  onClick?: () => void;
}

const Button: FC<ButtonType> = ({
  label,
  isLink = true,
  link = "#",
  isIcon = false,
  icon,
  altIcon = "Icon",
  onClick,
}) => {
  return (
    <>
      {isLink ? (
        <a href={link}>
          {label} {isIcon ? <img src={icon} alt={altIcon} /> : null}
        </a>
      ) : (
        <button onClick={onClick}>
          {label} {isIcon ? <img src={icon} alt={altIcon} /> : null}
        </button>
      )}
    </>
  );
};

export default Button;
