import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.PALETTE.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
