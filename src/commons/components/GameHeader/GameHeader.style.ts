import styled from "styled-components";

export const HeaderContainer = styled.nav`
  padding: 1% 0;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  place-items: center;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
`;

export const MainList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  width: 100%;
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  padding: 8px 15px;
  margin: 0;
  transform: skewX(-20deg);
  color: ${({ isActive, theme }) =>
    isActive ? theme.PALETTE.primaryDark : "white"};
  font-weight: lighter;
  background: ${({ theme, isActive }) =>
    isActive ? theme.PALETTE.primary : "none"};
  letter-spacing: 0.6px;
  cursor: pointer;
  transition: 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.PALETTE.primary};
  }
`;

export const LogoSection = styled.div`
  max-width: 350px;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transform: scale(0.8);
`;

export const TextSection = styled.div`
  margin-left: 5%;
  h1 {
    color: ${({ theme }) => theme.PALETTE.primary};
    font-weight: 100;
    margin: 0;
    padding: 0;
    font-style: italic;
    font-size: 34px;
  }

  h2 {
    margin: 0;
    padding: 0;
    color: white;
    font-weight: 100;
    font-size: 28px;
    line-height: 80%;
  }
`;
