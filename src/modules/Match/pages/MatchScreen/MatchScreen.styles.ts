import styled from "styled-components";
import { MAX_APP_WIDTH } from "../../../../constants";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.primaryDark};
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

export const SelfPlayer = styled.div`
  display: flex;
  justify-content: center;
  transform: scale(0.95);
`;

export const OpponentPlayer = styled.div`
  max-width: 500px;
`;

export const Content = styled.div`
  max-width: ${MAX_APP_WIDTH}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OpponentWriting = styled.div`
  margin-top: 2%;
  span {
    color: #c4c4c4;
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 0.4px;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
