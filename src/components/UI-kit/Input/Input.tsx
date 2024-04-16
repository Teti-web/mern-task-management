import { FC } from "react";
import { INPUT_TEST_ID } from "./constans";

export interface InputType {
  type: string;
  placeholder?: string;
  isLabel: boolean;
  label?: string;
}

const Input: FC<InputType> = ({ type, placeholder, isLabel, label }) => {
  const className =
    "font-primary font-medium text-[12px] rounded-[10px] border-[1px] border-primary-100 text-secondinary-500 pt-[16px] pl-[20px] pb-[16px] pr-[20px]placeholder:text-secondinary-400 hover:border-primary-300 transition-all duration-500 ease-in-out focus:border-primary-300 active:border-primary-300 block";

  const classNameLabel =
    "font-primary text-secondinary-500 font-semibold text-[14px] leading-4 grid gap-[16px]";

  return isLabel ? (
    <label className={classNameLabel}>
      {label}
      <input
        data-testid={INPUT_TEST_ID}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </label>
  ) : (
    <input
      data-testid={INPUT_TEST_ID}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
