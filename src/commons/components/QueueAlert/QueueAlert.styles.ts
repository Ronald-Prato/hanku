import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
`;

export const AlertContent = styled.div`
  @keyframes slideDown {
    from {
      transform: translateY(-200%);
    }
    to {
      transform: translateY(0);
    }
  }

  width: fit-content;
  cursor: pointer;
  padding: 0.8rem 2rem;
  box-sizing: border-box;
  position: fixed;
  margin: auto;
  top: 2%;
  left: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.PALETTE.primary},
    0 0 10px rgba(0, 0, 0, 0.6);
  background-color: ${({ theme }) => theme.PALETTE.primaryDark};
  color: ${({ theme }) => theme.PALETTE.primary};
  letter-spacing: 1.5px;
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-200%);
  animation: slideDown 300ms 100ms forwards;
`;
