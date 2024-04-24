import { FC } from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

export type HeaderType = {
  logo: string;
  isAuthication: boolean;
  language: string;
};

const Header: FC<HeaderType> = ({ logo, isAuthication, language }) => {
  if (!isAuthication) {
    return (
      <header className="flex justify-between items-center flex-row py-[30px] px-[17px]">
        <p>{logo}</p>
        <div className="flex justify-between items-center flex-row ">
          <p className="flex flex-row gap-[3px]">
            <GlobeEuropeAfricaIcon className="text-secondinary-400 w-[24px] h-[24px]" />
            {language}
          </p>
        </div>
      </header>
    );
  }
  return <div className=""></div>;
};

export default Header;
