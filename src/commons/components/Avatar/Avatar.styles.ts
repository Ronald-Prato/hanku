import styled from "styled-components";
import { Variations } from "./Avatar.contracts";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarContainer = styled.div<{ variation?: Variations }>`
  width: ${({ variation }) => (variation === "big" ? "180" : "100")}px;
  height: ${({ variation }) => (variation === "big" ? "180" : "100")}px;
  border-radius: 50%;
  background: ${({ theme }) => theme.PALETTE.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: ${({ variation }) => (variation === "big" ? "0" : "10")}px;

  &:before {
    content: "";
    width: ${({ variation }) => (variation === "big" ? "170" : "90")}px;
    height: ${({ variation }) => (variation === "big" ? "170" : "90")}px;
    border-radius: 50%;
    background: ${({ theme }) => theme.PALETTE.darker};
    position: absolute;
    z-index: -1;
    margin: auto;
  }

  img {
    width: ${({ variation }) => (variation === "big" ? "130" : "65")}px;
    height: ${({ variation }) => (variation === "big" ? "130" : "65")}px;
  }
`;

export const ButtonSection = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  button.change-button,
  button.save-button {
    background: none;
    outline: none;
    border: none;
    font-weight: bolder;
    font-size: 1.05rem;
    cursor: pointer;
  }
  button.change-button {
    color: white;
  }
  button.save-button {
    color: ${({ theme }) => theme.PALETTE.green};
  }
`;

export const TextSection = styled.div<{ variation?: Variations }>`
  display: flex;
  flex-direction: ${({ variation }) =>
    variation === "big" ? "column" : "row"};
  align-items: center;
`;

export const Username = styled.h2<{ variation?: Variations }>`
  font-size: ${({ variation }) => (variation === "big" ? "2rem" : "1rem")};
  margin: ${({ variation }) => (variation === "big" ? "10px 0 0 0" : "0")};
  font-weight: 100;
  color: ${({ theme }) => theme.PALETTE.primary};
`;

export const Lvl = styled.span<{ variation?: Variations }>`
  color: white;
  font-weight: 100;
  margin-bottom: ${({ variation }) => (variation === "big" ? "8%" : "0")};
  margin-left: ${({ variation }) => (variation === "big" ? "0" : "10px")};
  letter-spacing: 2px;
  font-weight: bolder;
  font-size: ${({ variation }) => (variation === "big" ? "1.7rem" : "0.9rem")};
`;
