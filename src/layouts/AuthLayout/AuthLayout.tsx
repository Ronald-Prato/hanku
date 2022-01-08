import React, { FC } from "react";
import HankuTypeImg from "../../assets/images/hanku-type.png";
import {
  Container,
  ImageWrapper,
  MainContent,
  Image,
} from "./AuthLayout.style";

export const AuthLayout: FC = ({ children }) => {
  return (
    <Container>
      <MainContent>{children}</MainContent>
      <ImageWrapper>
        <Image src={HankuTypeImg} alt="hanku type" />
      </ImageWrapper>
    </Container>
  );
};
