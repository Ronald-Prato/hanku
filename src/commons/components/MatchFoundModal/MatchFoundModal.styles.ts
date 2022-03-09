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

export const MainContent = styled.div`
  @keyframes slideUp {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0);
    }
  }

  background-color: ${({ theme }) => theme.PALETTE.primary};
  width: 500px;
  height: 400px;
  border-radius: 15px;
  position: fixed;
  margin: auto;
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
    margin-bottom: 2%;
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

export const LoaderContainer = styled.div`
  transform: scale(0.8);
  margin-top: -25%;

  .loader {
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #ffffff;
    background: -moz-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  .loader:after {
    background: ${({ theme }) => theme.PALETTE.primary};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
