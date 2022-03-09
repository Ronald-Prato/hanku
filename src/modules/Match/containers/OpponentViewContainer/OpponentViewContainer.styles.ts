import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: lighter;
    font-size: 25px;
    font-style: italic;
    color: ${({ theme }) => theme.PALETTE.primary};
    text-decoration: underline;
  }
`;

export const TextSection = styled.div`
  width: 80%;
  text-align: center;

  h4 {
    font-weight: lighter;
    font-size: 18px;
    color: white;
  }

  span {
    color: #c4c4c4;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;

    font-size: 14px;
  }
`;
