import { FC } from "react";
import Button from "@components/UI-kit/Button/Button";
import { IconStyleButton } from "@components/UI-kit/Button/constants";
import { Size, Style } from "@/constants/constants";
import wetchat from "@assets/wechat.png";

const UIkit: FC = () => {
  return (
    <div>
      <h1>UI-kit page</h1>
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
          icon={wetchat}
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
          icon={wetchat}
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
          icon={wetchat}
          iconStyle={IconStyleButton.ICON_LEFT}
          label="label"
          style={Style.SECONDARY}
          size={Size.LARGE}
        />
      </div>
    </div>
  );
};

export default UIkit;
