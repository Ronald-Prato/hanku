import React, { useState } from "react";
import { AiOutlineUser, AiTwotoneLock } from "react-icons/ai";

import { Theme } from "../../../theme";
import { FormButton, TextInput } from "../../../commons/components";
import {
  ButtonSection,
  InputsBox,
  LogoSection,
  MainContainer,
  TextSection,
} from "./Login.styles";
import { AuthLayout } from "../../../layouts/AuthLayout/AuthLayout";
import { ReactComponent as HankuTypeLogo } from "../../../assets/svg/hanku-type-logo.svg";

export const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChangeInputs = (option: string, value: string) => {
    setState({
      ...state,
      [option]: value,
    });
  };

  const handleLogin = () => {};

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
            placeholder="Nombre de usuario"
            onChange={(value) => handleChangeInputs("username", value)}
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
      </MainContainer>
    </AuthLayout>
  );
};
