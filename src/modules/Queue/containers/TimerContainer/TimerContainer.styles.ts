import styled from "styled-components";

export const MainContainer = styled.div`
  @keyframes slideUp {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0);
    }
  }

  width: 100%;
  position: absolute;
  bottom: 1vh;
  display: flex;
  justify-content: center;
  color: white;
  transform: translateY(1000%);
  animation: slideUp 250ms 900ms forwards;
`;
