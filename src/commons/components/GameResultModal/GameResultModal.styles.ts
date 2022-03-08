import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vh;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Opacity = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const MainContent = styled.div<{ hasWon: boolean }>`
  @keyframes slideUp {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0);
    }
  }

  background-color: ${({ theme, hasWon }) =>
    hasWon ? theme.PALETTE.green : theme.PALETTE.primary};
  width: 500px;
  height: 400px;
  border-radius: 15px;
  position: fixed;
  margin: auto;
  padding: 8% 0;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: translateY(200%);
  animation: slideUp 300ms 500ms ease-in-out forwards;

  i {
    font-size: 34px;
    color: white;
  }
`;

export const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1000;

  button {
    outline: none;
    background: ${({ theme }) => theme.PALETTE.primaryDark};
    border: none;
    color: white;
    box-shadow: inset 0 0 0 2px white;
    font-family: "Alfa Slab One", cursive;
    font-style: italic;
    font-weight: ligher;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    letter-spacing: 1.1px;
  }
  button.accept {
    width: 200px;
    padding: 3% 0;
    transition: ease-in-out 150ms;
    &:hover {
      transform: scale(1.1) translateY(-10%);
    }
  }
  button.reject {
    width: 160px;
    padding: 2% 0;
    transition: ease-in-out 300ms;
    &:hover {
      transform: scale(1.05) translateY(-2%);
    }
  }
`;

export const FeedbackSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    font-size: 34px;
    color: white;
  }

  span {
    font-size: 18px;
    color: white;
  }
`;

export const Points = styled.h2`
  font-style: italic;
  font-weight: lighter;
  font-size: 20px;
  color: white;
  text-align: center;
`;
