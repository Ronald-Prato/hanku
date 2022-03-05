import styled from "styled-components";
import { MAX_APP_WIDTH } from "../../../../constants";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.primaryDark};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: ${MAX_APP_WIDTH}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
