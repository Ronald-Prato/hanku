import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LeftContainer = styled.section`
  position: absolute;
  top: 12%;
  left: 10%;
  width: 30%;

  p {
    font-family: Roboto;
    color: white;
    font-weight: bolder;
    margin-bottom: -2%;
    color: ${({ theme }) => theme.PALETTE.primary};
  }

  span {
    font-family: Roboto;
    color: white;
    font-weight: 400;
  }

  h1 {
    color: ${({ theme }) => theme.PALETTE.primary};
    font-weight: 100;
    margin: 0;
    padding: 0;
    font-style: italic;
    font-size: 6rem;
  }

  h2 {
    margin: 0;
    padding: 0 0 12% 0;
    color: white;
    font-weight: 100;
    font-size: 5.5rem;
    line-height: 40%;
  }
`;

export const CustomButton = styled.button`
  transform: skewX(-20deg);
  background: ${({ theme }) => theme.PALETTE.primary};
  font-weight: 100;
  padding: 2% 8% 2% 5%;
  position: relative;
  outline: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-family: "Alfa Slab One", cursive;
  margin-top: 5%;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.PALETTE.darker};
    right: 6%;
    top: 0;
  }
`;
