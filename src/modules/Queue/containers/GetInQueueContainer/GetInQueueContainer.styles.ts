import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 4%;
  padding-bottom: 5%;
  overflow: hidden;
  position: relative;
`;

export const ButtonContainer = styled.button`
  position: relative;
  margin: auto;
  padding: 18px 22px;
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: Roboto;
  outline: none;
  background: none;
  border: none;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: rgba(234, 83, 93, 0.4);
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-size: 14px;
    font-weight: bolder;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    vertical-align: middle;
    color: #fff;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #fff;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: ${({ theme }) => theme.PALETTE.primary};
    }
    svg {
      transform: translateX(0);
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;

export const QueueLoaderContainer = styled.div`
  @keyframes slideUp {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0);
    }
  }

  width: 240px;
  height: 240px;
  background-color: ${({ theme }) => theme.PALETTE.primary};
  border-radius: 50%;
  transform: translateY(200%);
  animation: slideUp 500ms 250ms forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  div.circle-shape {
    width: 220px;
    height: 220px;
    background-color: ${({ theme }) => theme.PALETTE.primaryDark};
    border-radius: 50%;
    transform: translateY(200%);
    animation: slideUp 200ms 250ms forwards;
  }

  div.square-shape {
    width: 120px;
    height: 100px;
    transform: rotate(180deg);
    background: none;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 100px solid ${({ theme }) => theme.PALETTE.primaryDark};
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    margin: auto;
  }

  span {
    letter-spacing: 1.2px;
    position: absolute;
    margin: auto;
    font-weight: lighter;
    color: #fff;
    transform: translateY(1000%);
    animation: slideUp 250ms 600ms forwards;
  }

  button {
    position: absolute;
    margin: auto;
    bottom: -10%;
    outline: none;
    background: none;
    border: none;
    color: #fff;
    padding: 4% 12%;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.PALETTE.primary};
    font-family: Roboto;
    font-weight: bolder;
    cursor: pointer;
    border-radius: 10px;
    transform: translateY(1000%);
    animation: slideUp 250ms 700ms forwards;
  }
`;
