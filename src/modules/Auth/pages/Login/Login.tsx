import React, { useState } from "react";
import { AiOutlineUser, AiTwotoneLock } from "react-icons/ai";

import { Theme } from "../../../../theme";
import { Alert, FormButton, TextInput } from "../../../../commons/components";
import {
  ButtonSection,
  InputsBox,
  LogoSection,
  MainContainer,
  NoAccountSection,
  TextSection,
} from "./Login.styles";
import { AuthLayout } from "../../../../layouts/AuthLayout/AuthLayout";
import { ReactComponent as HankuTypeLogo } from "../../../../assets/svg/hanku-type-logo.svg";
import { useNavigate } from "react-router-dom";
import { checkLoginCredentials } from "../../utils/formUtils";
import { signIn } from "../../services/login";
import { AlertSeverities } from "../../../../commons/components/Alert/Alert.contracts";
import { useDispatch } from "react-redux";
import { setUserUid } from "../../../../commons/store/user/user.party";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [customAlert, setCustomAlert] = useState({
    message: "",
    severity: "normal",
    show: false,
  });

  const handleChangeInputs = (option: string, value: string) => {
    setState({
      ...state,
      [option]: value,
    });
  };

  const handleShowAlarm = (message: string, severity: AlertSeverities) => {
    setCustomAlert({
      show: true,
      message,
      severity,
    });
  };

  const handleLogin = async () => {
    const { email, password } = state;

    if (checkLoginCredentials({ email, password, handleShowAlarm })) {
      const user = await signIn(email, password, handleShowAlarm);

      if (!user) {
        return;
      }

      dispatch(setUserUid(user?.user.uid));
      navigate("/");
    }
  };

  const handleGoToSignup = () => {
    navigate("/signup");
  };

  return (
    <AuthLayout>
      <MainContainer>
        <LogoSection>
          <HankuTypeLogo width={100} />
          <TextSection>
            <h1>Hanku</h1>
            <h2>Type</h2>
          </TextSection>
        </LogoSection>

        <InputsBox onSubmit={(event) => event.preventDefault()}>
          <TextInput
            icon={<AiOutlineUser color={Theme.PALETTE.gray} />}
            placeholder="Correo electrónico"
            onChange={(value) => handleChangeInputs("email", value)}
          />

          <TextInput
            icon={<AiTwotoneLock color={Theme.PALETTE.gray} />}
            type="password"
            placeholder="Contraseña"
            onChange={(value) => handleChangeInputs("password", value)}
          />

          <ButtonSection>
            <FormButton title="INGRESAR" onClick={handleLogin} />
          </ButtonSection>
        </InputsBox>

        <NoAccountSection>
          <p>¿No tienes cuenta?</p>
          <b onClick={handleGoToSignup}>Regístrate aquí</b>
        </NoAccountSection>

        {customAlert.show && (
          <Alert
            message={customAlert.message}
            severity={customAlert.severity as AlertSeverities}
            onClosed={() => setCustomAlert({ ...customAlert, show: false })}
          />
        )}
      </MainContainer>
    </AuthLayout>
  );
};
