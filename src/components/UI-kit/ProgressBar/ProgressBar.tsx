import { FC } from "react";

export type ProgressBarType = {
  value: number;
};

const ProgressBar: FC<ProgressBarType> = ({ value }) => {
  return (
    <div className="bg-primary-200 rounded-[8px] w-full h-[8px]">
      <div
        className={`bg-primary-500 rounded-[8px] h-full relative
         after:rounded-full after:bg-primary-500 after:block after:border-[2px] after:border-white after:border-solid after:w-[16px] after:h-[16px] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
