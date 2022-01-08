import styled from "styled-components";

export const Container = styled.div`
  max-width: 1700px;
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
