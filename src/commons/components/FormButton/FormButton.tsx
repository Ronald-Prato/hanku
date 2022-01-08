import { FC } from "react";
import { FormButtonProps } from "./FormButton.contracts";
import { CustomButton } from "./FormButton.style";

export const FormButton: FC<FormButtonProps> = ({ onClick, title }) => {
  return <CustomButton onClick={onClick}>{title}</CustomButton>;
};
