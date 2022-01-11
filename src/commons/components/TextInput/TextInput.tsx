import { FC, useEffect, useState } from "react";
import { TextInputProps } from "./TextInput.contracts";
import { AiOutlineEye } from "react-icons/ai";
import { CustomInput, IconContainer, MainContainer } from "./TextInput.style";
import { Theme } from "../../../theme";

export const TextInput: FC<TextInputProps> = ({
  placeholder,
  onChange,
  defaultValue,
  icon,
  type,
  maxLength,
  centerText,
  customColor,
}) => {
  const [localType, setLocalType] = useState(type);
  const [toggleVisibility, setToggleVisibility] = useState(true);

  useEffect(() => {
    toggleVisibility ? setLocalType(type) : setLocalType("text");
  }, [toggleVisibility]);

  return (
    <MainContainer>
      {icon && <IconContainer>{icon}</IconContainer>}

      <CustomInput
        placeholder={placeholder}
        type={localType}
        defaultValue={defaultValue}
        onChange={(event) => onChange(event.target.value)}
        maxLength={maxLength}
        centerText={centerText || false}
        customColor={customColor}
        spellCheck={false}
      />

      {type === "password" && (
        <AiOutlineEye
          onClick={() => setToggleVisibility(!toggleVisibility)}
          style={{ paddingRight: 5, cursor: "pointer" }}
          color={Theme.PALETTE.gray}
        />
      )}
    </MainContainer>
  );
};
