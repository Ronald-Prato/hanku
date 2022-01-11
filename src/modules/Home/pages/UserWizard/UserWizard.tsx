import { AvatarContainer, NicknameContainer } from "../../containers";
import {
  BackgroundImage,
  MainContainer,
  MainContent,
} from "./UserWizard.style";
import HankuTypeImage from "../../../../assets/images/hanku-type.png";
import { ReactComponent as HankuTypeLogo } from "../../../../assets/svg/hanku-type-logo.svg";
import { Alert, FormButton } from "../../../../commons/components";
import { useState } from "react";
import { AlertSeverities } from "../../../../commons/components/Alert/Alert.contracts";
import { NICKNAME_MIN_LENGTH } from "../../../../constants";
import { useGunUser } from "../../../../commons/hooks/useGunUser";
import { useNavigate } from "react-router-dom";

export const UserWizard = () => {
  const { createUser } = useGunUser();
  const navigate = useNavigate();

  const [customAlert, setCustomAlert] = useState({
    show: false,
    message: "",
    severity: "",
  });
  const [state, setState] = useState({
    nickname: "",
    avatar: "",
  });

  const handleShowError = () => {
    setCustomAlert({
      show: true,
      message: "Hubo un error creando el usuario",
      severity: "error",
    });
  };

  const handleCreateUser = () => {
    const { nickname, avatar } = state;

    createUser({
      nickname,
      avatar,
      createdCallback: () => {
        navigate("/");
      },
      errorCallback: handleShowError,
    });
  };

  return (
    <MainContainer>
      <BackgroundImage src={HankuTypeImage} />

      <MainContent>
        <HankuTypeLogo width={80} />
        <NicknameContainer
          onChangeNickname={(value) => setState({ ...state, nickname: value })}
        />
        <AvatarContainer
          onChangeAvatar={(value) => setState({ ...state, avatar: value })}
        />

        <FormButton
          disabled={state.nickname.trim().length < NICKNAME_MIN_LENGTH}
          title="EMPEZAR"
          onClick={handleCreateUser}
        />
      </MainContent>

      {customAlert.show && (
        <Alert
          message={customAlert.message}
          severity={customAlert.severity as AlertSeverities}
          onClosed={() => setCustomAlert({ ...customAlert, show: false })}
        />
      )}
    </MainContainer>
  );
};
