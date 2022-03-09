import styled from "styled-components";
import { BiRevision } from "react-icons/bi";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0;
`;

export const AvatarSquare = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.PALETTE.darker};
  border-radius: 10px;
  display: grid;
  place-items: center;
  position: relative;
`;

export const Avatar = styled.img`
  max-width: 80px;
`;

export const RepeatIcon = styled(BiRevision)`
  position: absolute;
  bottom: -12%;
  right: -12%;
  cursor: pointer;
  font-size: 25px;
  background: black;
  border-radius: 50%;
  padding: 5px;
`;
