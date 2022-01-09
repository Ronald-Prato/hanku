import React, { useState } from "react";
import { AiOutlineUser, AiTwotoneLock } from "react-icons/ai";

import { Theme } from "../../../../theme";
import { FormButton, TextInput } from "../../../../commons/components";
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

export const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChangeInputs = (option: string, value: string) => {
    setState({
      ...state,
      [option]: value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = state;

    if (checkLoginCredentials({ email, password })) {
      const user = await signIn(email, password);

      if (!user) {
        return;
      }

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

        <InputsBox>
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
      </MainContainer>
    </AuthLayout>
  );
};
