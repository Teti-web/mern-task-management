import { FC } from "react";

export type NotificationType = {
  message: string;
};

const Notification: FC<NotificationType> = ({ message }) => {
  return <p className="">{message}</p>;
};

export default Notification;
