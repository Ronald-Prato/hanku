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
} from "./Signup.styles";
import { AuthLayout } from "../../../../layouts/AuthLayout/AuthLayout";
import { ReactComponent as HankuTypeLogo } from "../../../../assets/svg/hanku-type-logo.svg";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
    repeatedPassword: "",
  });

  const handleChangeInputs = (option: string, value: string) => {
    setState({
      ...state,
      [option]: value,
    });
  };

  const handleLogin = () => {};

  const handleGoToLogin = () => {
    navigate("/login");
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
            onChange={(value) => handleChangeInputs("username", value)}
          />

          <TextInput
            icon={<AiTwotoneLock color={Theme.PALETTE.gray} />}
            type="password"
            placeholder="Contraseña"
            onChange={(value) => handleChangeInputs("password", value)}
          />

          <TextInput
            icon={<AiTwotoneLock color={Theme.PALETTE.gray} />}
            type="password"
            placeholder="Repetir Contraseña"
            onChange={(value) => handleChangeInputs("repeatedPassword", value)}
          />

          <ButtonSection>
            <FormButton title="CREAR CUENTA" onClick={handleLogin} />
          </ButtonSection>
        </InputsBox>

        <NoAccountSection>
          <p>¿Ya tienes cuenta?</p>
          <b onClick={handleGoToLogin}>Inicia sesión</b>
        </NoAccountSection>
      </MainContainer>
    </AuthLayout>
  );
};
