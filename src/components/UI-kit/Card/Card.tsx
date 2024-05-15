import { FC } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

import ProgressBar from "../ProgressBar/ProgressBar";
import { CARD_TEST_ID } from "./constants";

export type CardType = {
  img: string;
  altImage?: string;
  title: string;
  suptitle: string;
  timeCreated: string;
  progressValue: number; //min 0, max 100
};

const Card: FC<CardType> = ({
  img,
  altImage,
  title,
  suptitle,
  timeCreated,
  progressValue,
}) => {
  return (
    <div
      className="bg-white rounded-[10px] p-[20px] md:p-[24px] grid grid-cols-1 gap-[16px] max-w-[340px]"
      data-testid={CARD_TEST_ID}
    >
      <img
        className="rounded-[10px] object-center object-cover w-full h-[110px]"
        src={img}
        alt={altImage}
      />
      <div className="font-primary">
        <h3 className="text-secondinary-500 font-semibold text-left text-[16px]">
          {title}
        </h3>
        <p className="text-[12px] font-medium text-left text-secondinary-400 pt-[5px]">
          {suptitle}
        </p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between font-primary font-medium text-[16px]">
          <p className="text-secondinary-500">Process</p>
          <p className="text-primary-500">{progressValue}%</p>
        </div>
        <ProgressBar value={progressValue} />
      </div>
      <div className="flex flex-row gap-[5px]">
        <ClockIcon className="w-[24px] h-[24px] text-secondinary-400" />
        <p className="font-primary font-medium text-[16px] text-secondinary-500">
          {timeCreated}
        </p>
      </div>
    </div>
  );
};

export default Card;
