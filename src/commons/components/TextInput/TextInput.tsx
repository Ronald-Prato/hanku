import { FC } from "react";
import { TextInputProps } from "./TextInput.contracts";
import { CustomInput, IconContainer, MainContainer } from "./TextInput.style";

export const TextInput: FC<TextInputProps> = ({
  placeholder,
  onChange,
  defaultValue,
  icon,
  type,
}) => {
  return (
    <MainContainer>
      {icon && <IconContainer>{icon}</IconContainer>}

      <CustomInput
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        onChange={(event) => onChange(event.target.value)}
      />
    </MainContainer>
  );
};
