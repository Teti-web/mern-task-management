import { FC } from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../UI-kit/Button/Button";
import { Style, Size } from "@/constants/constants";

export type HeaderType = {
  logo: string;
  isAuthication: boolean;
  language: string;
  btnLabel: string;
  changeLanguage?: () => void;
};

const Header: FC<HeaderType> = ({
  logo,
  isAuthication,
  language,
  btnLabel,
  changeLanguage,
}) => {
  if (!isAuthication) {
    return (
      <header className="flex justify-between items-center flex-row py-[30px] px-[17px]">
        <p>{logo}</p>
        <div className="flex justify-between items-center flex-row gap-[15px] ">
          <p
            className="flex flex-row gap-[3px] items-center hover:text-secondinary-300 transition-all ease-in-out duration-300 *:hover:text-secondinary-300 *:transition-all *:ease-in-out *:duration-300"
            onClick={changeLanguage}
          >
            <GlobeEuropeAfricaIcon className="text-secondinary-400 w-[24px] h-[24px]" />
            {language}
            <ChevronDownIcon className="w-[15px] h-[15px] text-secondinary-500 " />
          </p>
          <Button
            label={btnLabel}
            isLink
            style={Style.SECONDARY}
            size={Size.SMALL}
          />
        </div>
      </header>
    );
  }
  return <div className=""></div>;
};

export default Header;
