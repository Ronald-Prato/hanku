import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TabsContainer = styled.ul`
  padding: 0;
  list-style: none;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const TabItem = styled.li<{ isActive: boolean }>`
  color: white;
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
  cursor: pointer;

  &:before {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    content: "";
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.PALETTE.primary};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
