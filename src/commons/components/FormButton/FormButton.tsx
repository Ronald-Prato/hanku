import { FC } from "react";
import { FormButtonProps } from "./FormButton.contracts";
import { CustomButton } from "./FormButton.style";

export const FormButton: FC<FormButtonProps> = ({
  onClick,
  title,
  disabled,
}) => {
  return (
    <CustomButton isDisabled={disabled} disabled={disabled} onClick={onClick}>
      {title}
    </CustomButton>
  );
};
