import { FC, useEffect, useState } from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { Style, Size } from "@constants/constants";
import { useTranslation } from "react-i18next";
import Button from "@components/UI-kit/Button/Button";
import Select from "@components/UI-kit/Select/Select";
import { IconStyleButton } from "@components/UI-kit/Button/constants";
import { BellIcon, UserIcon } from "@heroicons/react/24/solid";

export type HeaderType = {
  logo?: string;
  title?: string;
  isAuthication: boolean;
  btnLabel?: string;
};

const Header: FC<HeaderType> = ({ logo, isAuthication, btnLabel, title }) => {
  const [isGlobeHovered, setIsGlobeHovered] = useState(false);
  const [isHaveNotification, setIsHaveNotification] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const { t, i18n } = useTranslation();

  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setButtonValue(t(`language-${language}`));
  };
  useEffect(() => {
    setIsHaveNotification(true);
  }, []);

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
            label={btnLabel || ""}
            isLink
            style={Style.SECONDARY}
            size={Size.MEDIUM}
          />
        </div>
      </header>
    );
  }
  return (
    <header className="w-full flex justify-between items-center p-[30px]">
      <h3>{title}</h3>
      <div className="flex items-center gap-[15px] relative">
        <div
          className={`${isHaveNotification ? " block relative after:absolute after:top-[12px] md:after:top-[15px] after:right-[13px] md:after:right-[16px] after:z-10 after:bg-pink-600 after:w-[8px] after:h-[8px] after:opacity-90 after:rounded-full  after:block  " : null}`}
        >
          <Button
            style={Style.CIRCLE}
            size={Size.CIRCLE}
            isLink={false}
            isIcon
            label={""}
            iconStyle={IconStyleButton.ICON_ONLY}
            icon={
              <BellIcon
                className={`text-secondinary-300 w-[20px] h-[20px] md:w-[24px] md:h-[24px]`}
              />
            }
          />
        </div>
        <Button
          style={Style.CIRCLE}
          size={Size.CIRCLE}
          isLink={true}
          isIcon
          label={""}
          iconStyle={IconStyleButton.ICON_ONLY}
          icon={
            <UserIcon className="text-secondinary-300 w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          }
        />
      </div>
    </header>
  );
};
export default Header;
