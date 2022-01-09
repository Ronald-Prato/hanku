import styled from "styled-components";
import { MAX_APP_WIDTH } from "../../constants";

export const Container = styled.div`
  max-width: ${MAX_APP_WIDTH}px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const ImageWrapper = styled.div`
  height: 100vh;
  background: steelblue;
  display: flex;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0)
  );
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  position: relative;
  z-index: -1;
`;

export const MainContent = styled.div`
  height: 100vh;
`;

export const DynamicTextSection = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
`;

export const Title = styled.p`
  width: 100%;
  font-size: 30px;
  color: white;
  font-weight: lighter;
  margin: 0;
  font-style: italic;
`;

export const Subtitle = styled.p`
  width: 100%;
  font-size: 48px;
  color: ${({ theme }) => theme.PALETTE.primary};
  font-weight: lighter;
  margin: 0;
  line-height: 80%;
  padding-left: 5%;
`;
