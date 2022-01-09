import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.PALETTE.darker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const InputsBox = styled.div`
  max-width: 350px;
  width: 80%;
  display: grid;
  grid-template-colums: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
`;

export const ButtonSection = styled.div`
  width: 100%;
`;

export const LogoSection = styled.div`
  max-width: 350px;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5%;
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

export const NoAccountSection = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 10%;
  display: flex;
  font-family: monospace;
  width: 100%;
  justify-content: center;
  font-family: Roboto;

  p {
    margin: 0;
    color: ${({ theme }) => theme.PALETTE.lightGray};
  }
  b {
    margin: 0;
    color: ${({ theme }) => theme.PALETTE.lightGray};
    text-decoration: underline;
    margin-left: 2%;
    cursor: pointer;
  }
`;
