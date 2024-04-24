import { FC } from "react";
import Button from "@components/UI-kit/Button/Button";
import { IconStyleButton } from "@components/UI-kit/Button/constants";
import { Size, Style } from "@/constants/constants";
import Input from "@/components/UI-kit/Input/Input";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Card from "@/components/UI-kit/Card/Card";
import ImageTesting from "@assets/Image.jpg";
import Header from "@/components/Header/Header";

const UIkit: FC = () => {
  const handleChange = () => {
    console.log("changed");
  };

  const progressValue = 75;

  return (
    <div>
      <h1>UI-kit page</h1>
      <Header isAuthication={false} language="En" logo="Logo" />

      <div className="flex  w-max gap-[4px]">
        <Button
          isLink={false}
          label="label"
          style={Style.PRIMARY}
          size={Size.SMALL}
        />
        <Button
          isLink={true}
          isIcon={true}
          icon={<ChatBubbleLeftEllipsisIcon className=" h-[18px] w-[18px]" />}
          iconStyle={IconStyleButton.ICON_LEFT}
          label="label"
          style={Style.PRIMARY}
          size={Size.SMALL}
        />
      </div>
      <div className="flex  w-max gap-[4px] pt-3">
        <Button
          isLink={false}
          label="label"
          style={Style.MINIMAL}
          size={Size.MEDIUM}
        />
        <Button
          isLink={true}
          isIcon={true}
          icon={<ChatBubbleLeftEllipsisIcon className=" h-[18px] w-[18px] " />}
          iconStyle={IconStyleButton.ICON_LEFT}
          label="label"
          style={Style.MINIMAL}
          size={Size.MEDIUM}
        />
      </div>
      <div className="flex  w-max gap-[4px] pt-3">
        <Button
          isLink={false}
          label="label"
          style={Style.SECONDARY}
          size={Size.LARGE}
        />
        <Button
          isLink={true}
          isIcon={true}
          icon={<ChatBubbleLeftEllipsisIcon className=" h-[18px] w-[18px] " />}
          iconStyle={IconStyleButton.ICON_LEFT}
          label="label"
          style={Style.SECONDARY}
          size={Size.LARGE}
        />
      </div>
      <div className=" pt-3">
        <Input
          isLabel
          label="label"
          type="text"
          placeholder="input text"
          onChange={handleChange}
        />
      </div>
      <div className="w-2/3 pt-3">
        <ProgressBar value={30} />
        <Card
          img={ImageTesting}
          title="Creating Mobile App Design"
          suptitle="UI UX Design"
          timeCreated="3 Days Left"
          progressValue={progressValue}
        />
      </div>
    </div>
  );
};

export default UIkit;
