import { FC, useState } from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { Style, Size } from "@constants/constants";
import { useTranslation } from "react-i18next";
import Button from "@components/UI-kit/Button/Button";
import Select from "@components/UI-kit/Select/Select";

export type HeaderType = {
  logo: string;
  isAuthication: boolean;
  btnLabel: string;
};

const Header: FC<HeaderType> = ({ logo, isAuthication, btnLabel }) => {
  const [isGlobeHovered, setIsGlobeHovered] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const { t, i18n } = useTranslation();

  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setButtonValue(t(`language-${language}`));
  };

  if (!isAuthication) {
    return (
      <header className="w-full flex justify-between items-center p-[30px]">
        <p>{logo}</p>
        <div className="flex items-center gap-[15px] relative">
          <div
            className="flex items-center gap-[3px] cursor-pointer"
            onMouseEnter={() => setIsGlobeHovered(true)}
            onMouseLeave={() => setIsGlobeHovered(false)}
          >
            <GlobeEuropeAfricaIcon
              className={`w-[24px] h-[24px] transition-all duration-300 ${
                isGlobeHovered ? "text-primary-500" : "text-secondinary-400 "
              }`}
            />
            <Select
              buttonValue={buttonValue}
              onChange={languageChange}
              options={[
                { value: "en", text: t("language-en") },
                { value: "pl", text: t("language-pl") },
                { value: "ukr", text: t("language-ukr") },
              ]}
            />
          </div>
          <Button
            label={btnLabel}
            isLink
            style={Style.SECONDARY}
            size={Size.MEDIUM}
          />
        </div>
      </header>
    );
  }
  return (
    <div className="w-full flex justify-between items-center p-[30px]">
      {/* //TODO: when isAuthication */}
    </div>
  );
};
export default Header;
