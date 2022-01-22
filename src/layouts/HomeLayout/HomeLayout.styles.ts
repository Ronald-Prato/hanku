import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.PALETTE.primaryDark};
  display: grid;
  grid-template-rows: 140px 1fr;
`;
