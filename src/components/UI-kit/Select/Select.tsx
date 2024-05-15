import { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export type SelectType = {
  buttonValue: string;
  isBorder?: boolean;
  options: {
    value: string;
    text: string;
  }[];
  onChange: (value: string) => void;
};

const Select: FC<SelectType> = ({
  options,
  onChange,
  isBorder,
  buttonValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let buttonSelectClass =
    "flex justify-between items-center gap-[3px] text-secondary-500 w-full text-left font-primary font-medium text-[12px] px-[4px] py-[6px] transition-all ease-in-out duration-300 lg:text-[14px] hover:text-primary-500 focus:text-primary-600";
  const chevronClass = `w-[20px] h-[20px] text-secondary-500 transition-transform duration-300 ${isOpen ? "transform -rotate-180" : ""}`;

  if (isBorder) {
    buttonSelectClass +=
      " px-[10px] py-[14px] md:px-[16px] md:py-[20px] border-[1px] border-solid rounded-[10px] border-border bg-white hover:border-primary-100 hover:text-secondary-500 focus:border-primary-200 focus:text-secondary-500";
  }

  const handleLanguageChange = (option: { value: string; text: string }) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="w-full relative">
      <button className={buttonSelectClass} onClick={() => setIsOpen(!isOpen)}>
        {buttonValue || options[0].text}{" "}
        <ChevronDownIcon className={chevronClass} />
      </button>
      {isOpen && (
        <ul className=" absolute grid gap-3 w-full z- border-solid border-[1px] rounded-[10px] border-border bg-white px-[10px] py-[14px] leading-snug font-primary font-medium text-[12px] md:px-[16px] md:py-[20px] lg:text-[14px]">
          {options.map((option, index) => (
            <li
              className="cursor-pointer hover:text-primary-500"
              key={index}
              onClick={() => handleLanguageChange(option)}
            >
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
