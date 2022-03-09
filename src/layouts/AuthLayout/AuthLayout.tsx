import React, { FC } from "react";
import HankuTypeImg from "../../assets/images/hanku-type.png";
import {
  Container,
  ImageWrapper,
  MainContent,
  Image,
  DynamicTextSection,
  Title,
  Subtitle,
} from "./AuthLayout.style";

export const AuthLayout: FC = ({ children }) => {
  // TODO: Use remote config for this
  const TITLE = "Clasificatorias de";
  const SUBTITLE = "escritura rápida!";

  return (
    <Container>
      <MainContent>{children}</MainContent>
      <ImageWrapper>
        <Image src={HankuTypeImg} alt="hanku type" />
        <DynamicTextSection>
          <Title>{TITLE}</Title>
          <Subtitle>{SUBTITLE}</Subtitle>
        </DynamicTextSection>
      </ImageWrapper>
    </Container>
  );
};
