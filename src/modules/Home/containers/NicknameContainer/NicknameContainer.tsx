import { FC } from "react";
import { TextInput } from "../../../../commons/components";
import { NICKNAME_MAX_LENGTH } from "../../../../constants";
import { MainContainer, Title } from "./NicknameContainer.style";

interface NicknameContainerProps {
  onChangeNickname: (value: string) => void;
}

export const NicknameContainer: FC<NicknameContainerProps> = ({
  onChangeNickname,
}) => {
  return (
    <MainContainer>
      <Title>Crea tu usuario</Title>

      <TextInput
        centerText
        onChange={onChangeNickname}
        placeholder="Nombre de usuario"
        maxLength={NICKNAME_MAX_LENGTH}
        customColor="white"
      />
    </MainContainer>
  );
};
