import { FC, useState } from "react";
import { ButtonSection, Lvl, MainContainer, Username } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.contracts";
import { AvatarContainer } from "./Avatar.styles";
import { AVATAR_BASE_URL } from "../../../constants";
import { v4 as uuidv4 } from "uuid";
import { useGunUser } from "../../hooks/useGunUser";
import { AlertSeverities } from "../Alert/Alert.contracts";
import { Alert } from "..";

export const Avatar: FC<AvatarProps> = ({ user, showControllers = true }) => {
  const [localAvatar, setLocalAvatar] = useState(user.avatar);
  const { updateAvatar } = useGunUser();
  const [customAlert, setCustomAlert] = useState({
    show: false,
    severity: "",
    message: "",
  });

  const changeAvatar = () => {
    const randomSeed = uuidv4();
    const newAvatarLink = `${AVATAR_BASE_URL}/${randomSeed}.svg`;
    setLocalAvatar(newAvatarLink);
  };

  const handleSaveAvatar = () => {
    updateAvatar(localAvatar, () => {
      setCustomAlert({
        message: "Avatar actualizado",
        severity: "success",
        show: true,
      });
    });
  };

  return (
    <MainContainer>
      <Username>{user.nickname}</Username>
      <Lvl>{user.lvl}</Lvl>

      <AvatarContainer>
        <img alt="HankyUser" src={localAvatar} />
      </AvatarContainer>

      {showControllers && (
        <ButtonSection>
          <button className="change-button" onClick={changeAvatar}>
            Cambiar avatar
          </button>
          {localAvatar !== user.avatar && (
            <button className="save-button" onClick={handleSaveAvatar}>
              Guardar
            </button>
          )}
        </ButtonSection>
      )}

      {customAlert.show && (
        <Alert
          severity={customAlert.severity as AlertSeverities}
          message={customAlert.message}
          onClosed={() => setCustomAlert({ ...customAlert, show: false })}
        />
      )}
    </MainContainer>
  );
};
