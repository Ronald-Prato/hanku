import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BackgroundImage = styled.img`
  @keyframes movement {
    0% {
      transform: scale(1) translateY(-8%);
    }
    50% {
      transform: scale(1.1) translateY(-8%);
    }
    100% {
      transform: scale(1) translateY(-8%);
    }
  }

  width: 110%;
  transform: translateY(-8%);
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  animation: movement 15s ease-in-out infinite;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.7);
  padding: 2% 5%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
