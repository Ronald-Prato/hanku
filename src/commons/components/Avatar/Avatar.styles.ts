import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: ${({ theme }) => theme.PALETTE.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: ${({ theme }) => theme.PALETTE.darker};
    position: absolute;
    z-index: -1;
    margin: auto;
  }

  img {
    width: 130px;
    height: 130px;
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

export const Username = styled.h2`
  font-size: 2rem;
  margin: 10px 0 0 0;
  font-weight: 100;
  color: ${({ theme }) => theme.PALETTE.primary};
`;

export const Lvl = styled.span`
  color: white;
  font-weight: 100;
  margin-bottom: 8%;
  letter-spacing: 2px;
  font-weight: bolder;
  font-size: 1.7rem;
`;
