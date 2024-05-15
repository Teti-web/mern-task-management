import { FC } from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import Button from "../UI-kit/Button/Button";
import { Style, Size } from "@/constants/constants";
import Select from "../Select/Select";
import { useTranslation } from "react-i18next";

export type HeaderType = {
  logo: string;
  isAuthication: boolean;
  btnLabel: string;
};

const Header: FC<HeaderType> = ({ logo, isAuthication, btnLabel }) => {
  const { t, i18n } = useTranslation();

  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  if (!isAuthication) {
    return (
      <header className="w-full flex justify-between items-center p-[30px]">
        <p>{logo}</p>
        <div className="flex items-center gap-[15px] relative">
          <div className="flex items-center gap-[3px] cursor-pointer hover:text-secondary-300 transition-all duration-300">
            <GlobeEuropeAfricaIcon className="text-secondary-400 w-[24px] h-[24px]" />
            <Select
              selectName={t("selectLanguage")}
              onChange={languageChange}
              options={[
                { value: "en", text: t("language1") },
                { value: "pl", text: t("language2") },
                { value: "ukr", text: t("language3") },
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
      //TODO: when isAuthication
    </div>
  );
};
export default Header;
